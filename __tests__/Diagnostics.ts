import { AllActionDescriptions } from '../src/constants/AllActionDescriptions';
import { isValidAction } from '../src/validators/isValidAction';
import { isEditorAction } from '../src/type-guards/isEditorAction';
import { isMouseAction } from '../src/type-guards/isMouseAction';
import { isRepeatableAction } from '../src/type-guards/isRepeatableAction';
import { createDiagnosticsShims, DIAGNOSTICS_SHIMS_PATH } from '../src/diagnostics/createDiagnosticsShims';
import { getDiagnosticsChecks, getDiagnosticsCompilerOptions, fromDiagnosticsFileName, toDiagnosticsFileName } from '../src/diagnostics/diagnosticsCompilerOptions';
import { diagnosticContains, flattenDiagnosticMessageText, offsetToPosition, toCodeVideoDiagnostic } from '../src/diagnostics/toCodeVideoDiagnostic';
import { getDiagnosticHoverAt, isDiagnosticsVisibleAt, parseDiagnosticLocation, usesDiagnostics } from '../src/diagnostics/diagnosticActions';

const speak = { name: 'author-speak-before', value: 'Look at this error.' };
const hover = { name: 'mouse-move-editor-diagnostic', value: 'src/generics.ts:12:38' };

describe('diagnostics actions', () => {
  it.each(['editor-show-diagnostics', 'editor-hide-diagnostics', 'mouse-move-editor-diagnostic'])('%s is documented and not repeatable', name => {
    expect(AllActionDescriptions.some(row => row.name === name)).toBe(true);
    expect(isRepeatableAction({ name, value: '1' })).toBe(false);
  });

  it('routes the toggles to the editor and the hover to the mouse', () => {
    expect(isEditorAction({ name: 'editor-show-diagnostics', value: '1' })).toBe(true);
    expect(isMouseAction(hover)).toBe(true);
  });

  it('accepts a hover only with a location', () => {
    expect(isValidAction(hover)).toBeTruthy();
    expect(isValidAction({ name: hover.name, value: 'src/generics.ts:12' })).toBeTruthy();
    expect(isValidAction({ name: hover.name, value: '"cat"' })).toBe(false);
    expect(isValidAction({ name: hover.name, value: 'src/generics.ts' })).toBe(false);
    expect(isValidAction({ name: 'editor-show-diagnostics', value: '1' })).toBeTruthy();
  });

  it('parses locations with or without a column and a leading slash', () => {
    expect(parseDiagnosticLocation('src/generics/generics.ts:12:38')).toEqual({ path: 'src/generics/generics.ts', line: 12, column: 38 });
    expect(parseDiagnosticLocation('/src/a.tsx:3')).toEqual({ path: 'src/a.tsx', line: 3 });
    expect(parseDiagnosticLocation('src/a.ts:0:1')).toBeNull();
    expect(parseDiagnosticLocation('src/a.ts:x:1')).toBeNull();
  });

  it('follows the prop, then the last toggle', () => {
    const actions = [speak, { name: 'editor-show-diagnostics', value: '1' }, speak, { name: 'editor-hide-diagnostics', value: '1' }, speak];
    expect(actions.map((_, i) => isDiagnosticsVisibleAt(actions, i))).toEqual([false, true, true, false, false]);
    expect(isDiagnosticsVisibleAt(actions, 0, true)).toBe(true);
    expect(usesDiagnostics([speak])).toBe(false);
    expect(usesDiagnostics([speak], true)).toBe(true);
    expect(usesDiagnostics(actions)).toBe(true);
  });

  it('keeps the hover open through speech and waits only', () => {
    const actions = [speak, hover, speak, { name: 'author-wait', value: '500' }, { name: 'editor-type', value: 'x' }, speak];
    expect(actions.map((_, i) => getDiagnosticHoverAt(actions, i)?.line ?? null)).toEqual([null, 12, 12, 12, null, null]);
  });
});

describe('diagnostics engine inputs', () => {
  it('checks TypeScript fully and JavaScript for syntax only', () => {
    expect(getDiagnosticsChecks('src/a.tsx')).toEqual({ syntactic: true, semantic: true });
    expect(getDiagnosticsChecks('src/a.js')).toEqual({ syntactic: true, semantic: false });
    expect(getDiagnosticsChecks('README.md')).toBeNull();
  });

  it('hands out a fresh copy of the compiler options', () => {
    const options = getDiagnosticsCompilerOptions();
    (options.lib as string[]).push('lib.webworker.d.ts');
    expect(getDiagnosticsCompilerOptions().lib).toEqual(['lib.esnext.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts']);
  });

  it('round-trips program file names', () => {
    expect(toDiagnosticsFileName('/src/a.ts')).toBe('file:///src/a.ts');
    expect(fromDiagnosticsFileName('file:///src/a.ts')).toBe('src/a.ts');
  });

  it('shims every imported package unless the project declares it', () => {
    const shims = createDiagnosticsShims([
      { path: 'src/App.tsx', content: "import React, { useState } from 'react';\nimport {\n  render\n} from \"react-dom/client\";\nimport './App.scss';\nimport logo from './logo.svg';\nconst lazy = import('lodash/debounce');\nimport x = require('left-pad');\nexport default () => <div />;" },
      { path: 'src/types.d.ts', content: "declare module 'moment' { const moment: () => string; export default moment; }" },
      { path: 'src/util.ts', content: "import moment from 'moment';\nimport { a } from './a';" },
      { path: 'node_modules/@types/lodash/index.d.ts', content: 'export {};' },
      { path: 'notes.md', content: "import nope from 'nope';" },
    ]);
    expect(shims.path).toBe(DIAGNOSTICS_SHIMS_PATH);
    const modules = shims.content.split('\n').filter(line => /^declare module "/.test(line));
    expect(modules).toEqual([
      'declare module "left-pad";',
      'declare module "react" {',
      'declare module "react-dom/client" {',
      'declare module "react/jsx-runtime";',
    ]);
    expect(shims.content).toContain("declare module '*.svg'");
    expect(shims.content).toContain('declare namespace JSX');
  });

  it('declares each imported name the way the project uses it', () => {
    const shims = createDiagnosticsShims([{
      path: 'src/App.tsx',
      content: [
        "import React, { useState, ReactNode as Node, type ChangeEvent } from 'react';",
        "import * as R from 'react';",
        "import { Component } from 'react';",
        "const [q] = useState<Array<string>>([]);",
        "const n = React.useMemo<number>(() => 1, []);",
        "const f: React.FC<{ a: string }> = () => null;",
        "const g: R.FC = () => null;",
        "class A extends Component<{}> {}",
        "class B extends React.Component<{}> {}",
      ].join('\n'),
    }]).content;
    expect(shims).toContain('    export function useState<A = any, B = any, C = any, D = any>(...args: any[]): any;');
    expect(shims).toContain('    export type ReactNode<A = any, B = any, C = any, D = any> = any;');
    expect(shims).toContain('    export const ReactNode: any;');
    expect(shims).toContain('    export type ChangeEvent<A = any, B = any, C = any, D = any> = any;');
    expect(shims).toContain('    export class Component<A = any, B = any, C = any, D = any> { constructor(...args: any[]); [key: string]: any; }');
    expect(shims).toContain('    export const FC: any;');
    // members of the default import live in its namespace
    expect(shims).toContain('        export function useMemo<A = any, B = any, C = any, D = any>(...args: any[]): any;');
    expect(shims).toContain('        export class Component<A = any, B = any, C = any, D = any> { constructor(...args: any[]); [key: string]: any; }');
    expect(shims).toContain('    export default __codevideo_default;');
  });

  it('names what dynamic imports and require() destructure', () => {
    const shims = createDiagnosticsShims([{
      path: 'src/reportWebVitals.ts',
      content: "import { ReportHandler } from 'web-vitals';\nimport('web-vitals').then(({ getCLS, getFID: fid }) => {});\nconst { chunk } = require('lodash');\nconst { default: big } = await import('big.js');",
    }]).content;
    for (const name of ['ReportHandler', 'getCLS', 'getFID']) expect(shims).toContain(`    export const ${name}: any;`);
    expect(shims).toContain('declare module "lodash" {');
    expect(shims).toContain('    export const chunk: any;');
    expect(shims).toContain('declare module "big.js";');
  });

  it('gives JSX attributes a function type so event handlers are typed', () => {
    const shims = createDiagnosticsShims([{ path: 'src/a.tsx', content: 'export const a = <input onChange={(event) => event} />;' }]).content;
    expect(shims).toContain('((...args: any[]) => any)');
    expect(shims).toContain('interface IntrinsicElements { [elementName: string]: { [attribute: string]: __CodeVideoJsxAttribute } }');
  });

  it('leaves out the JSX namespace for plain TypeScript', () => {
    expect(createDiagnosticsShims([{ path: 'src/a.ts', content: 'export const a = 1;' }]).content).not.toContain('JSX');
  });
});

describe('diagnostic conversion', () => {
  it('flattens message chains like TypeScript', () => {
    const chain = { messageText: 'Top.', next: [{ messageText: 'Middle.', next: [{ messageText: 'Bottom.' }] }] };
    expect(flattenDiagnosticMessageText(chain)).toBe('Top.\n  Middle.\n    Bottom.');
    expect(flattenDiagnosticMessageText('Plain.')).toBe('Plain.');
  });

  it('converts offsets the way the editor counts them', () => {
    const text = 'ab\ncd\r\nef';
    expect(offsetToPosition(text, 0)).toEqual({ line: 1, column: 1 });
    expect(offsetToPosition(text, 4)).toEqual({ line: 2, column: 2 });
    expect(offsetToPosition(text, 7)).toEqual({ line: 3, column: 1 });
    expect(offsetToPosition(text, 99)).toEqual({ line: 3, column: 3 });
  });

  it('turns a TypeScript diagnostic into a squiggle', () => {
    const text = 'const x = sortByKey<IFooBar>(fooBars, "cat");';
    const start = text.indexOf('"cat"');
    const diagnostic = toCodeVideoDiagnostic('/src/generics.ts', text, {
      start, length: 5, category: 1, code: 2345,
      messageText: 'Argument of type \'"cat"\' is not assignable to parameter of type \'keyof IFooBar\'.',
    });
    expect(diagnostic).toEqual({
      path: 'src/generics.ts', line: 1, column: start + 1, endLine: 1, endColumn: start + 6,
      severity: 'error', code: 2345,
      message: 'Argument of type \'"cat"\' is not assignable to parameter of type \'keyof IFooBar\'.',
    });
    expect(diagnosticContains(diagnostic, 1, start + 1)).toBe(true);
    expect(diagnosticContains(diagnostic, 1, start + 6)).toBe(true);
    expect(diagnosticContains(diagnostic, 1, start)).toBe(false);
  });

  it('gives zero-length diagnostics one character, as Monaco does', () => {
    const diagnostic = toCodeVideoDiagnostic('a.ts', 'let a = ', { start: 4, length: 0, category: 0, code: 1005, messageText: "';' expected." });
    expect([diagnostic.column, diagnostic.endColumn, diagnostic.severity]).toEqual([5, 6, 'warning']);
  });
});
