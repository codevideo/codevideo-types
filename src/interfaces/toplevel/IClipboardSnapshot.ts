// what's on the clipboard: the text a paste would insert
export interface IClipboardSnapshot {
    text: string;
    // true when the text is a whole line copied or cut with nothing selected (so it
    // ends with "\n"); pasting it with nothing selected inserts it above the caret's
    // line, as VS Code does. Missing means false.
    isFullLine?: boolean;
}
