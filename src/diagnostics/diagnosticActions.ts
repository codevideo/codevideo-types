import { IAction } from '../interfaces/IAction';
import { IDiagnosticLocation } from '../interfaces/diagnostics/ICodeVideoDiagnostic';
import { normalizeDiagnosticsPath } from './diagnosticsCompilerOptions';

export const DIAGNOSTICS_ACTION_NAMES = ['editor-show-diagnostics', 'editor-hide-diagnostics', 'mouse-move-editor-diagnostic'];

/** Parses 'src/a.ts:12:38' (or 'src/a.ts:12'); null when the value isn't a location. */
export const parseDiagnosticLocation = (value: string): IDiagnosticLocation | null => {
    const match = /^([^:]+):(\d+)(?::(\d+))?$/.exec((value ?? '').trim());
    if (!match) return null;
    const path = normalizeDiagnosticsPath(match[1].trim());
    const line = Number(match[2]);
    const column = match[3] === undefined ? undefined : Number(match[3]);
    if (!path || line < 1 || (column !== undefined && column < 1)) return null;
    return column === undefined ? { path, line } : { path, line, column };
};

/** True when a project needs the diagnostics machinery at all. */
export const usesDiagnostics = (actions: Array<IAction>, isDiagnosticsVisible = false): boolean =>
    isDiagnosticsVisible || actions.some(action => DIAGNOSTICS_ACTION_NAMES.includes(action.name));

/** Whether squiggles show while the action at `index` plays. */
export const isDiagnosticsVisibleAt = (actions: Array<IAction>, index: number, isDiagnosticsVisible = false): boolean => {
    let visible = isDiagnosticsVisible;
    for (let i = 0; i <= Math.min(index, actions.length - 1); i++) {
        if (actions[i].name === 'editor-show-diagnostics') visible = true;
        else if (actions[i].name === 'editor-hide-diagnostics') visible = false;
    }
    return visible;
};

/**
 * The diagnostic hover open once the action at `index` has finished: the last
 * 'mouse-move-editor-diagnostic', as long as only author actions (speech,
 * waits) came after it. Null otherwise.
 */
export const getDiagnosticHoverAt = (actions: Array<IAction>, index: number): IDiagnosticLocation | null => {
    for (let i = Math.min(index, actions.length - 1); i >= 0; i--) {
        const action = actions[i];
        if (action.name === 'mouse-move-editor-diagnostic') return parseDiagnosticLocation(action.value);
        if (!action.name.startsWith('author-')) return null;
    }
    return null;
};
