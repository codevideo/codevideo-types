import { IAction } from "../interfaces/IAction";
import { isRepeatableAction } from "../type-guards/isRepeatableAction";

/** Playback settings that change how long actions take. */
export interface IEstimateOptions {
    /** Defaults to 50, codevideo-ide-react's KEYBOARD_TYPING_PAUSE_MS. */
    keyboardTypingPauseMs?: number;
    /** Defaults to 1000, codevideo-ide-react's STANDARD_PAUSE_MS. */
    standardPauseMs?: number;
    /** Measured narration lengths in ms by action index. Other narration is estimated from its word count. */
    speechMs?: Record<number, number>;
}

const DEFAULT_KEYBOARD_TYPING_PAUSE_MS = 50;
const DEFAULT_STANDARD_PAUSE_MS = 1000;
// Narration without a measured clip is estimated at 150 words per minute.
const WORDS_PER_SECOND = 2.5;
// author-wait falls back to this when its value isn't a positive number.
const DEFAULT_WAIT_MS = 1000;
// mouse-move-* pads the standard pause so the cursor animation can finish.
const MOUSE_MOVE_PADDING_MS = 300;

// Editor keys that take one typing pause per press.
const KEY_PRESSES = new Set<string>([
    "editor-arrow-up", "editor-arrow-down", "editor-arrow-left", "editor-arrow-right",
    "editor-shift+arrow-right", "editor-shift+arrow-left", "editor-shift+arrow-up", "editor-shift+arrow-down",
    "editor-command+shift+arrow-right", "editor-command+shift+arrow-left",
    "editor-shift+end", "editor-shift+home",
    "editor-command-left", "editor-command-right",
    "editor-tab", "editor-enter", "editor-space", "editor-backspace",
]);

/**
 * Predicts how long each action plays in a realtime recording, in ms: one
 * standard pause plus the action's own time (typing, narration, waits).
 *
 * Mirrors codevideo-ide-react's executeActionPlaybackForMonacoInstance, so
 * change them together. The Go twin is codevideo-cli's cli/estimate package;
 * both check __tests__/fixtures/estimate-cases.json.
 */
export const estimateActionDurationsMs = (actions: IAction[], options: IEstimateOptions = {}): number[] => {
    const keyboardTypingPauseMs = positiveOr(options.keyboardTypingPauseMs, DEFAULT_KEYBOARD_TYPING_PAUSE_MS);
    const standardPauseMs = positiveOr(options.standardPauseMs, DEFAULT_STANDARD_PAUSE_MS);
    return actions.map((action, index) => {
        // Every action first waits a standard pause so the DOM can settle.
        let ms = standardPauseMs;
        // Repeatable actions run as many times as their value says.
        const times = isRepeatableAction(action) ? parseInt(action.value, 10) : 1;
        for (let i = 0; i < times; i++) {
            ms += perRunMs(action, index, keyboardTypingPauseMs, standardPauseMs, options.speechMs);
        }
        return ms;
    });
};

/** The video's estimated length in seconds: the sum of estimateActionDurationsMs. */
export const estimateVideoDurationInSeconds = (actions: IAction[], options: IEstimateOptions = {}): number =>
    estimateActionDurationsMs(actions, options).reduce((total, ms) => total + ms, 0) / 1000;

const perRunMs = (action: IAction, index: number, keyboardTypingPauseMs: number, standardPauseMs: number, speechMs?: Record<number, number>): number => {
    const name = action.name;
    if (name === "author-speak-before" || name === "author-speak-after") {
        const measured = speechMs?.[index];
        if (measured !== undefined && measured > 0) return measured;
        return wordCount(action.value) / WORDS_PER_SECOND * 1000;
    }
    if (name === "author-wait") {
        const ms = parseInt(action.value, 10);
        return ms > 0 ? ms : DEFAULT_WAIT_MS;
    }
    if (name === "editor-type") return action.value.length * keyboardTypingPauseMs;
    if (name === "terminal-type") {
        const lines = action.value.split("\n");
        return lines[lines.length - 1].length * keyboardTypingPauseMs;
    }
    if (KEY_PRESSES.has(name)) return keyboardTypingPauseMs;
    if (name === "editor-scroll-up" || name === "editor-scroll-down") return standardPauseMs;
    if (name.startsWith("mouse-move-")) return standardPauseMs + MOUSE_MOVE_PADDING_MS;
    // author-speak-during, file explorer typing (not awaited in realtime),
    // clicks, slides and external pages add nothing beyond the base pause.
    return 0;
};

const positiveOr = (value: number | undefined, fallback: number): number =>
    value !== undefined && value > 0 ? value : fallback;

const wordCount = (text: string): number => text.split(/\s+/).filter(Boolean).length;
