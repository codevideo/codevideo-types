import { IFileSource } from '../interfaces/dynamic-ast/IFileSource';
import { isDiagnosticsProgramFile, normalizeDiagnosticsPath } from './diagnosticsCompilerOptions';

/** Where the shims live in the program. Never a project path. */
export const DIAGNOSTICS_SHIMS_PATH = '__codevideo__/shims.d.ts';

// Specifiers in `import x from`, `export x from`, side-effect imports, dynamic imports and require().
const SPECIFIER_PATTERNS = [
    /\b(?:import|export)\s[^;'"`]*?\bfrom\s*(['"])([^'"\r\n]+)\1/g,
    /\bimport\s*(['"])([^'"\r\n]+)\1/g,
    /\bimport\s*\(\s*(['"])([^'"\r\n]+)\1\s*\)/g,
    /\brequire\s*\(\s*(['"])([^'"\r\n]+)\1\s*\)/g,
];
// ES import/export clauses, which say which names a file takes from a package.
const IMPORT_CLAUSE = /\bimport\s+(?:type\s+)?([^;'"`]*?)\s*\bfrom\s*(['"])([^'"\r\n]+)\2/g;
const EXPORT_CLAUSE = /\bexport\s+(?:type\s+)?\{([^}]*)\}\s*from\s*(['"])([^'"\r\n]+)\2/g;
// Names destructured from import()/require(): import('m').then(({ a, b }) => ...),
// const { a } = await import('m'), const { a } = require('m').
const DESTRUCTURED_DYNAMIC = [
    /\bimport\s*\(\s*(['"])([^'"\r\n]+)\1\s*\)\s*\.then\s*\(\s*(?:async\s*)?\(?\s*\{([^}]*)\}/g,
    /\{([^}]*)\}\s*=\s*(?:await\s+)?import\s*\(\s*(['"])([^'"\r\n]+)\2\s*\)/g,
    /\{([^}]*)\}\s*=\s*require\s*\(\s*(['"])([^'"\r\n]+)\2\s*\)/g,
];
const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;
// Type arguments up to the call's opening parenthesis, e.g. useState<Array<IWidget>>(
const TYPE_ARGUMENTS_THEN_CALL = '\\s*<[^;(){}]*>\\s*\\(';

const isBareSpecifier = (specifier: string): boolean =>
    !/^(\.|\/|[a-z][a-z0-9+.-]*:\/\/)/i.test(specifier);

/** 'react-dom/client' -> 'react-dom', '@types/x/y' -> '@types/x'. */
const packageName = (specifier: string): string =>
    specifier.split('/').slice(0, specifier.startsWith('@') ? 2 : 1).join('/');

const escape = (text: string) => text.replace(/[$]/g, '\\$');

// Create React App's react-app-env.d.ts, so asset imports resolve as they do there.
const ASSET_SHIMS = [
    "declare module '*.module.css' { const classes: { readonly [key: string]: string }; export default classes; }",
    "declare module '*.module.scss' { const classes: { readonly [key: string]: string }; export default classes; }",
    "declare module '*.module.sass' { const classes: { readonly [key: string]: string }; export default classes; }",
    "declare module '*.css';",
    "declare module '*.scss';",
    "declare module '*.sass';",
    "declare module '*.less';",
    "declare module '*.svg' { export const ReactComponent: any; const src: string; export default src; }",
    ...['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'bmp', 'ico'].map(extension =>
        `declare module '*.${extension}' { const src: string; export default src; }`),
    "declare module '*.json' { const value: any; export default value; }",
];

// Lets TSX type-check its own components while React itself stays untyped.
// Attributes of HTML elements accept anything, but as a union that holds a
// function type, so `onChange={(event) => ...}` gets `any` for `event`
// instead of an implicit-any error.
const JSX_SHIM = `type __CodeVideoJsxAttribute = string | number | bigint | boolean | object | ((...args: any[]) => any) | null | undefined;
declare namespace JSX {
    interface Element { readonly [key: string]: any }
    interface ElementClass { readonly [key: string]: any }
    interface ElementAttributesProperty { props: {} }
    interface ElementChildrenAttribute { children: {} }
    interface IntrinsicAttributes { key?: any }
    interface IntrinsicClassAttributes<T> { ref?: any }
    interface IntrinsicElements { [elementName: string]: { [attribute: string]: __CodeVideoJsxAttribute } }
}`;

/** How a project uses one name it imports from a package. */
interface NameUse { generic: boolean; constructible: boolean }

interface ModuleUse {
    /** Exports the project names: named imports, and members of a namespace import. */
    names: Map<string, NameUse>;
    /** Members used on the default import, e.g. React.FC. */
    defaultMembers: Map<string, NameUse>;
    /** The default import's own use: React(...) / new Moment() / <Moment />. */
    defaultUse: NameUse | null;
}

const mergeUse = (map: Map<string, NameUse>, name: string, use: NameUse) => {
    if (!IDENTIFIER.test(name) || name === 'default') return;
    const known = map.get(name);
    map.set(name, { generic: !!known?.generic || use.generic, constructible: !!known?.constructible || use.constructible });
};

/** How `reference` (an identifier, or a dotted member like React.Component) is used in `content`. */
const useOf = (content: string, reference: string): NameUse => {
    const name = escape(reference).replace(/\./g, '\\s*\\.\\s*');
    return {
        generic: new RegExp(`(^|[^\\w$.])${name}${TYPE_ARGUMENTS_THEN_CALL}`).test(content),
        constructible: new RegExp(`\\b(?:extends|new)\\s+${name}(?![\\w$.])`).test(content),
    };
};

const membersOf = (content: string, local: string): Array<string> =>
    [...content.matchAll(new RegExp(`(^|[^\\w$.])${escape(local)}\\s*\\.\\s*([A-Za-z_$][\\w$]*)`, 'g'))].map(match => match[2]);

const GENERICS = '<A = any, B = any, C = any, D = any>';

/** Declarations for one name: a type for type positions, and a value shaped by how it's used. */
const declareName = (name: string, use: NameUse, indent: string): Array<string> => {
    if (use.constructible) return [`${indent}export class ${name}${GENERICS} { constructor(...args: any[]); [key: string]: any; }`];
    return [
        `${indent}export type ${name}${GENERICS} = any;`,
        use.generic ? `${indent}export function ${name}${GENERICS}(...args: any[]): any;` : `${indent}export const ${name}: any;`,
    ];
};

const DEFAULT = '__codevideo_default';

const declareModule = (specifier: string, use: ModuleUse): string => {
    const lines = [`declare module ${JSON.stringify(specifier)} {`];
    for (const [name, nameUse] of [...use.names].sort(([a], [b]) => (a < b ? -1 : 1))) lines.push(...declareName(name, nameUse, '    '));
    if (use.defaultUse) {
        lines.push(use.defaultUse.constructible
            ? `    class ${DEFAULT}${GENERICS} { constructor(...args: any[]); [key: string]: any; }`
            : `    function ${DEFAULT}${GENERICS}(...args: any[]): any;`);
        if (!use.defaultUse.constructible) lines.push(`    type ${DEFAULT}${GENERICS} = any;`);
        lines.push(`    namespace ${DEFAULT} {`);
        for (const [name, nameUse] of [...use.defaultMembers].sort(([a], [b]) => (a < b ? -1 : 1))) lines.push(...declareName(name, nameUse, '        '));
        lines.push('    }', `    export default ${DEFAULT};`);
    }
    lines.push('}');
    return lines.join('\n');
};

/**
 * A declaration file that keeps imports from lighting up red when the project
 * has no node_modules. Every npm package a file imports gets an untyped stand-in
 * that still allows what typed code does with it: each name the project takes
 * from the package works as a type (ReactNode, React.FC<P>), as a generic call
 * when it's called with type arguments (useState<string>()), and as a class
 * when it's extended or constructed. Packages only imported for side effects or
 * through require() stay plain `any` modules. CSS and image imports resolve like
 * they do in Create React App, and TSX gets a JSX namespace. Packages whose
 * declarations the project carries itself (`declare module 'x'`, or
 * node_modules/x / node_modules/@types/x files) are left alone. The renderer
 * and codevideo-mcp both use this, so they agree on which imports error.
 */
export const createDiagnosticsShims = (files: Array<IFileSource>): IFileSource => {
    const specifiers = new Set<string>();
    const declared = new Set<string>();
    const uses = new Map<string, ModuleUse>();
    const useFor = (specifier: string): ModuleUse => {
        if (!uses.has(specifier)) uses.set(specifier, { names: new Map(), defaultMembers: new Map(), defaultUse: null });
        return uses.get(specifier)!;
    };
    let hasJsx = false;
    for (const file of files) {
        const path = normalizeDiagnosticsPath(file.path);
        const nodeModules = /(?:^|\/)node_modules\/(?:@types\/)?((?:@[^/]+\/)?[^/]+)\//.exec(path);
        if (nodeModules) declared.add(nodeModules[1]);
        if (!isDiagnosticsProgramFile(path)) continue;
        const content = file.content;
        if (/\.(tsx|jsx)$/i.test(path)) hasJsx = true;
        for (const match of content.matchAll(/\bdeclare\s+module\s+(['"])([^'"\r\n]+)\1/g)) declared.add(match[2]);
        for (const pattern of SPECIFIER_PATTERNS) {
            for (const match of content.matchAll(pattern)) {
                if (isBareSpecifier(match[2])) specifiers.add(match[2]);
            }
        }
        for (const match of content.matchAll(IMPORT_CLAUSE)) {
            const specifier = match[3];
            if (!isBareSpecifier(specifier)) continue;
            const use = useFor(specifier);
            let clause = match[1];
            const namespace = /\*\s*as\s+([A-Za-z_$][\w$]*)/.exec(clause);
            if (namespace) {
                for (const member of membersOf(content, namespace[1])) mergeUse(use.names, member, useOf(content, `${namespace[1]}.${member}`));
                clause = clause.replace(namespace[0], '');
            }
            const named = /\{([^}]*)\}/.exec(clause);
            if (named) {
                for (const part of named[1].split(',')) {
                    const [original, local] = part.trim().replace(/^type\s+/, '').split(/\s+as\s+/).map(text => text.trim());
                    if (original) mergeUse(use.names, original, useOf(content, local || original));
                }
                clause = clause.replace(named[0], '');
            }
            const defaultLocal = /^\s*([A-Za-z_$][\w$]*)\s*(?:,|$)/.exec(clause);
            if (defaultLocal) {
                const local = defaultLocal[1];
                const own = useOf(content, local);
                use.defaultUse = { generic: !!use.defaultUse?.generic || own.generic, constructible: !!use.defaultUse?.constructible || own.constructible };
                for (const member of membersOf(content, local)) mergeUse(use.defaultMembers, member, useOf(content, `${local}.${member}`));
            }
        }
        DESTRUCTURED_DYNAMIC.forEach((pattern, index) => {
            for (const match of content.matchAll(pattern)) {
                const [specifier, list] = index === 0 ? [match[2], match[3]] : [match[3], match[1]];
                if (!isBareSpecifier(specifier)) continue;
                for (const part of list.split(',')) {
                    const key = part.split(/[:=]/)[0].trim();
                    if (key) mergeUse(useFor(specifier).names, key, { generic: false, constructible: false });
                }
            }
        });
        for (const match of content.matchAll(EXPORT_CLAUSE)) {
            if (!isBareSpecifier(match[3])) continue;
            const use = useFor(match[3]);
            for (const part of match[1].split(',')) {
                const original = part.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0].trim();
                if (original) mergeUse(use.names, original, { generic: false, constructible: false });
            }
        }
    }
    if (hasJsx) specifiers.add('react/jsx-runtime');
    const shims = [...specifiers]
        .filter(specifier => !declared.has(specifier) && !declared.has(packageName(specifier)))
        .sort()
        .map(specifier => {
            const use = uses.get(specifier);
            // No ES import names anything (side effects, require, dynamic import): plain `any`.
            return use && (use.names.size || use.defaultUse) ? declareModule(specifier, use) : `declare module ${JSON.stringify(specifier)};`;
        });
    const content = [
        '// Generated by CodeVideo: untyped stand-ins for packages the project imports.',
        ...shims,
        ...ASSET_SHIMS,
        ...(hasJsx ? [JSX_SHIM] : []),
    ].join('\n') + '\n';
    return { path: DIAGNOSTICS_SHIMS_PATH, content };
};
