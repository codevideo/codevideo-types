/**
 * Represents the actions that change the clipboard directly. Copying and
 * cutting in the editor (editor-command-c, editor-command-x) fill it too.
 */
export type ClipboardActions =
/* Puts text on the clipboard as if it was copied somewhere off screen (value: the text) */
"clipboard-set-text"
/* Empties the clipboard */
| "clipboard-clear";
