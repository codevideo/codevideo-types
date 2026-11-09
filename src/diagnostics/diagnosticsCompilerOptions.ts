/**
 * The TypeScript release that computes CodeVideo diagnostics. It is the one
 * Monaco 0.52.2 bundles in its TypeScript worker, which the IDE uses in the
 * browser; codevideo-mcp pins the same `typescript` version so compile_lesson
 * reports exactly what a render shows.
 */
export const DIAGNOSTICS_TYPESCRIPT_VERSION = '5.4.5';

/**
 * Compiler options for CodeVideo diagnostics, close to a Create React App
 * tsconfig. Plain values (TypeScript enum numbers) so the browser worker and
 * Node's `typescript` receive the same settings. Returns a fresh copy.
 */
export const getDiagnosticsCompilerOptions = (): Record<string, string | number | boolean | string[]> => ({
    target: 99, // ScriptTarget.ESNext
    module: 99, // ModuleKind.ESNext
    moduleResolution: 2, // ModuleResolutionKind.Node10
    jsx: 4, // JsxEmit.ReactJSX
    lib: ['lib.esnext.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
    strict: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    allowJs: true,
    checkJs: false,
    skipLibCheck: true,
    noEmit: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
});

/** 'src/a.ts', '/src/a.ts' and 'src\\a.ts' all name the same project file. */
export const normalizeDiagnosticsPath = (path: string): string =>
    path.replace(/\\/g, '/').replace(/^\/+/, '');

/**
 * The file name a project file has inside the TypeScript program. Both engines
 * use these URIs, so messages that quote a path read the same.
 */
export const toDiagnosticsFileName = (path: string): string => 'file:///' + normalizeDiagnosticsPath(path);

/** The project path of a program file name made by toDiagnosticsFileName. */
export const fromDiagnosticsFileName = (fileName: string): string => normalizeDiagnosticsPath(fileName.replace(/^file:\/\//, ''));

/**
 * Files that take part in the program. .mts/.cts/.mjs/.cjs are left out: the
 * browser worker can't tell them from plain scripts.
 */
export const isDiagnosticsProgramFile = (path: string): boolean => /\.(tsx?|jsx?)$/i.test(path);

/**
 * Which checks a file gets: TypeScript files syntax and types, JavaScript
 * files syntax only (VS Code's default without checkJs). Null for files that
 * get no squiggles.
 */
export const getDiagnosticsChecks = (path: string): { syntactic: boolean; semantic: boolean } | null => {
    if (/\.tsx?$/i.test(path)) return { syntactic: true, semantic: true };
    if (/\.jsx?$/i.test(path)) return { syntactic: true, semantic: false };
    return null;
};
