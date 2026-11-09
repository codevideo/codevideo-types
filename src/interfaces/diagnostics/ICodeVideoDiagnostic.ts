export type DiagnosticSeverity = 'error' | 'warning' | 'info';

/**
 * One TypeScript diagnostic, as the editor shows it (a squiggle plus its hover
 * message) and as codevideo-mcp's compile_lesson reports it. Lines and columns
 * are 1-based, like VS Code and tsc output; the end is exclusive.
 */
export interface ICodeVideoDiagnostic {
    /** Project path without a leading slash, e.g. 'src/generics.ts'. */
    path: string;
    line: number;
    column: number;
    endLine: number;
    endColumn: number;
    severity: DiagnosticSeverity;
    /** The TypeScript error code, e.g. 2345. Shown as ts(2345). */
    code: number;
    /** The full message, nested chain lines included, as VS Code shows it. */
    message: string;
}

/** A diagnostic's position as written in a 'mouse-move-editor-diagnostic' value. */
export interface IDiagnosticLocation {
    path: string;
    line: number;
    /** Optional: without it the first diagnostic starting on the line is meant. */
    column?: number;
}
