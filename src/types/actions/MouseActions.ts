/**
 * Represents the different mouse actions that can be performed in the application.
 */
export type MouseActions = 
// mouse movement

/* Moves the mouse to the center of the file explorer */
"mouse-move-file-explorer" 
/* Moves the mouse to the center of the editor */
| "mouse-move-editor"
/* Moves the mouse to the center of the editor (value should correspond to name of file) */
| "mouse-move-editor-tab"
/* Moves the mouse to the close button of the  */
| "mouse-move-editor-tab-close"
/* Moves the mouse to the center of the terminal */
| "mouse-move-terminal"
/* Moves the mouse to the center of the terminal tab (value should correspond to number of terminal) */
| "mouse-move-terminal-tab"
/* Moves the mouse to the close button of the terminal tab (value should correspond to number of terminal) */
| "mouse-move-terminal-tab-close"
/* Moves the mouse to the center of the given file in the file explorer (value should correspond to name of file) */
| "mouse-move-file-explorer-file" 
/* Moves the mouse to the center of the given folder in the file explorer (value should correspond to name of folder) */
| "mouse-move-file-explorer-folder"
/* Moves the mouse to given pixel based coordinates (value should be in x,y format) */
| "mouse-move-to-coordinates-pixels"
/* Moves the mouse to given percent based coordinates (value should be in x,y format) */
| "mouse-move-to-coordinates-percent"
/* Moves the mouse to the center of the file explorer context menu "New File..." row */
| "mouse-move-file-explorer-context-menu-new-file"
/* Moves the mouse to the center of the file explorer context menu "New Folder..." row */
| "mouse-move-file-explorer-context-menu-new-folder"
/* Moves the mouse to the center of the file context menu "Rename" row */
| "mouse-move-file-explorer-file-context-menu-rename"
/* Moves the mouse to the center of the file context menu "Delete" row */
| "mouse-move-file-explorer-file-context-menu-delete"
/* Moves the mouse to the center of the folder context menu "New File..." row */
| "mouse-move-file-explorer-folder-context-menu-new-file"
/* Moves the mouse to the center of the folder context menu "New Folder..." row */
| "mouse-move-file-explorer-folder-context-menu-new-folder"
/* Moves the mouse to the center of the folder context menu "Rename" row */
| "mouse-move-file-explorer-folder-context-menu-rename"
/* Moves the mouse to the center of the folder context menu "Delete" row */
| "mouse-move-file-explorer-folder-context-menu-delete"
/* Moves the mouse to the center of the editor context menu "Go To Definition" row. If the editor context menu is not open, this is a no op. */
| "mouse-move-editor-context-menu-go-to-definition"
/* Moves the mouse to the center of the “Cut” editor context menu row. If the editor context menu is not open, this is a no op. */
| "mouse-move-editor-context-menu-cut"
/* Moves the mouse to the center of the “Copy” editor context menu row. If the editor context menu is not open, this is a no op. */
| "mouse-move-editor-context-menu-copy"
/* Moves the mouse to the center of the “Paste” editor context menu row. If the editor context menu is not open, this is a no op. */
| "mouse-move-editor-context-menu-paste"
/* Moves the mouse to the save button on the unsaved changes dialog */
| "mouse-move-unsaved-changes-dialog-button-save"
/* Moves the mouse to the "Don't Save" button on the unsaved changes dialog */
| "mouse-move-unsaved-changes-dialog-button-dont-save"
/* Moves the mouse to the "Cancel" button on the unsaved changes dialog */
| "mouse-move-unsaved-changes-dialog-button-cancel"
| "mouse-move" // the 'composite' move action used by codevideo-mouse... might be legacy soon
// mouse left clicks
/* Moves the mouse to the center of the file explorer and clicks */
| "mouse-left-click" 
| "mouse-double-left-click" 
| "mouse-triple-left-click" 
// mouse right clicks
| "mouse-right-click"
| "mouse-right-double-click"
| "mouse-right-triple-click";