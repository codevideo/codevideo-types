/**
 * A clipboard an editor copies to and pastes from. The VirtualIDE gives every
 * editor the same one, so text copied in one file can be pasted in another.
 */
export interface IClipboard {
    getText(): string;
    // true when the text is a whole line copied or cut with nothing selected
    // (see IClipboardSnapshot); a paste with nothing selected then goes above
    // the caret's line
    isFullLine(): boolean;
    setText(text: string, isFullLine?: boolean): void;
}
