import { DiagnosticSeverity, ICodeVideoDiagnostic } from '../interfaces/diagnostics/ICodeVideoDiagnostic';
import { normalizeDiagnosticsPath } from './diagnosticsCompilerOptions';

/** The fields of a TypeScript Diagnostic / DiagnosticMessageChain this module reads. */
export interface ITypeScriptMessageChain {
    messageText: string;
    next?: Array<ITypeScriptMessageChain>;
}

export interface ITypeScriptDiagnostic {
    start?: number;
    length?: number;
    messageText: string | ITypeScriptMessageChain;
    /** DiagnosticCategory: 0 warning, 1 error, 2 suggestion, 3 message. */
    category: number;
    code: number;
}

/** TypeScript's flattenDiagnosticMessageText: nested chain lines indented by two spaces per level. */
export const flattenDiagnosticMessageText = (message: string | ITypeScriptMessageChain | undefined, newLine = '\n', indent = 0): string => {
    if (typeof message === 'string') return message;
    if (message === undefined) return '';
    let result = '';
    if (indent) result += newLine + '  '.repeat(indent);
    result += message.messageText;
    for (const next of message.next ?? []) result += flattenDiagnosticMessageText(next, newLine, indent + 1);
    return result;
};

/** 1-based line and column of an offset, counting line breaks the way TypeScript does. */
export const offsetToPosition = (text: string, offset: number): { line: number; column: number } => {
    const target = Math.max(0, Math.min(offset, text.length));
    let line = 1, lineStart = 0;
    for (let i = 0; i < target; i++) {
        const char = text.charCodeAt(i);
        if (char === 13 /* \r */ && text.charCodeAt(i + 1) === 10 /* \n */) {
            if (i + 1 === target) break; // between \r and \n: still on this line
            i++;
        }
        if (char === 10 || char === 13 || char === 0x2028 || char === 0x2029) {
            line++;
            lineStart = i + 1;
        }
    }
    return { line, column: target - lineStart + 1 };
};

const SEVERITIES: Record<number, DiagnosticSeverity> = { 0: 'warning', 1: 'error', 3: 'info' };

/**
 * A TypeScript diagnostic as CodeVideo shows it. Mirrors Monaco's own
 * conversion: a zero-length diagnostic covers one character. Suggestion
 * diagnostics (category 2) are never requested, so they map to 'info'.
 */
export const toCodeVideoDiagnostic = (path: string, text: string, diagnostic: ITypeScriptDiagnostic): ICodeVideoDiagnostic => {
    const start = diagnostic.start ?? 0;
    const from = offsetToPosition(text, start);
    const to = offsetToPosition(text, start + (diagnostic.length || 1));
    return {
        path: normalizeDiagnosticsPath(path),
        line: from.line,
        column: from.column,
        endLine: to.line,
        endColumn: to.column,
        severity: SEVERITIES[diagnostic.category] ?? 'info',
        code: diagnostic.code,
        message: flattenDiagnosticMessageText(diagnostic.messageText),
    };
};

/** True when a 1-based position is inside a diagnostic (end inclusive, as a hover is). */
export const diagnosticContains = (diagnostic: ICodeVideoDiagnostic, line: number, column: number): boolean => {
    if (line < diagnostic.line || line > diagnostic.endLine) return false;
    if (line === diagnostic.line && column < diagnostic.column) return false;
    if (line === diagnostic.endLine && column > diagnostic.endColumn) return false;
    return true;
};
