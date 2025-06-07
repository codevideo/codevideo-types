// TODO: a unit test to check if these are all statically within the other types would be cool
// also somehow not adding to these manually...
export const AllActionStrings = [
    // from AuthorActions
    "author-speak-before",
    "author-speak-after",
    "author-speak-during",
    "author-wait",
    // from EditorActions
    "editor-type",
    "editor-save", // repeatable
    "editor-arrow-up", // repeatable
    "editor-arrow-down", // repeatable
    "editor-arrow-left", // repeatable
    "editor-arrow-right", // repeatable
    "editor-enter", // repeatable
    "editor-tab", // repeatable
    "editor-shift+arrow-left", // repeatable
    "editor-shift+arrow-right", // repeatable
    "editor-shift+arrow-down", // repeatable
    "editor-shift+arrow-up", // repeatable
    "editor-cmd+d", // repeatable
    "editor-backspace", // repeatable
    "editor-space", // repeatable
    "editor-highlight-code",
    "editor-delete-line",
    "editor-command-left", // repeatable
    "editor-command-right", // repeatable
    "editor-command-d", // repeatable
    "editor-command-c", // repeatable
    "editor-command-v", // repeatable
    "editor-shift-down-arrow", // repeatable
    "editor-shift-up-arrow", // repeatable
    "editor-scroll-up", // not repeatable, needs the number of pixel offset
    "editor-scroll-down", // not repeatable, needs the number of pixel offset
    "editor-show-context-menu", // repeatable, typically always '1'
    "editor-hide-context-menu", // repeatable, typically always '1'
    // from MouseActions
    "mouse-move-file-explorer", // repeatable
    "mouse-move-editor", // repeatable
    "mouse-move-editor-tab", // not repeatable, needs the tab name
    "mouse-move-editor-tab-close", // not repeatable, needs the tab name
    "mouse-move-terminal", // repeatable
    "mouse-move-terminal-tab", // NOT repeatable, needs the tab name
    "mouse-move-terminal-tab-close", // NOT repeatable, needs the tab name
    "mouse-move-file-explorer-file", // NOT repeatable, needs the file name
    "mouse-move-file-explorer-folder", // NOT repeatable, needs the folder name
    "mouse-move-to-coordinates-pixels", // NOT repeatable, needs the coordinates in pixels
    "mouse-move-to-coordinates-percent", // NOT repeatable, needs the coordinates in percent
    "mouse-move-file-explorer-context-menu-new-file", // repeatable
    "mouse-move-file-explorer-context-menu-new-folder", // repeatable
    "mouse-move-file-explorer-file-context-menu-rename", // repeatable
    "mouse-move-file-explorer-file-context-menu-delete", // repeatable
    "mouse-move-file-explorer-folder-context-menu-new-file", // repeatable
    "mouse-move-file-explorer-folder-context-menu-new-folder", // repeatable
    "mouse-move-file-explorer-folder-context-menu-rename", // repeatable
    "mouse-move-file-explorer-folder-context-menu-delete", // repeatable
    "mouse-move-editor-context-menu-go-to-definition", // repeatable
    "mouse-move-editor-context-menu-cut", // repeatable
    "mouse-move-editor-context-menu-copy", // repeatable
    "mouse-move-editor-context-menu-paste", // repeatable
    "mouse-move-unsaved-changes-dialog-button-save", // repeatable
    "mouse-move-unsaved-changes-dialog-button-dont-save", // repeatable
    "mouse-move-unsaved-changes-dialog-button-cancel", // repeatable
    "mouse-move", // NOT repeatable, needs the coordinates and times array
    "mouse-left-click", // repeatable
    "mouse-double-left-click", // repeatable
    "mouse-triple-left-click", // repeatable
    "mouse-right-click", // repeatable
    "mouse-right-double-click", // repeatable
    "mouse-right-triple-click", // repeatable
    // from FileExplorerActions
    "file-explorer-set-present-working-directory", // not repeatable, needs the path
    "file-explorer-set-file-contents",
    "file-explorer-set-file-caret-position", // not repeatable, needs the file name, row, and col
    "file-explorer-create-file",
    "file-explorer-open-file",
    "file-explorer-close-file",
    "file-explorer-rename-file",
    "file-explorer-delete-file",
    "file-explorer-move-file",
    "file-explorer-copy-file",
    "file-explorer-create-folder",
    "file-explorer-expand-folder",
    "file-explorer-collapse-folder",
    "file-explorer-rename-folder",
    "file-explorer-delete-folder",
    "file-explorer-toggle-folder",
    "file-explorer-move-folder",
    "file-explorer-copy-folder",
    "file-explorer-show-context-menu",
    "file-explorer-hide-context-menu",
    "file-explorer-show-file-context-menu",
    "file-explorer-hide-file-context-menu",
    "file-explorer-show-folder-context-menu",
    "file-explorer-hide-folder-context-menu",
    "file-explorer-show-new-file-input",
    "file-explorer-show-new-folder-input",
    "file-explorer-hide-new-file-input",
    "file-explorer-hide-new-folder-input", 
    "file-explorer-type-new-file-input",
    "file-explorer-clear-new-file-input",
    "file-explorer-type-new-folder-input",
    "file-explorer-clear-new-folder-input",
    "file-explorer-rename-file-draft-state",
    "file-explorer-rename-folder-draft-state",
    "file-explorer-type-rename-file-input",
    "file-explorer-type-rename-folder-input",
    "file-explorer-enter-new-file-input", // repeatable
    "file-explorer-enter-new-folder-input", // repeatable
    "file-explorer-enter-rename-file-input", // repeatable   
    "file-explorer-enter-rename-folder-input", // repeatable
    // from TerminalActions
    "terminal-open",
    "terminal-type",
    "terminal-arrow-up", // repeatable
    "terminal-arrow-down", // repeatable
    "terminal-arrow-left", // repeatable
    "terminal-arrow-right", // repeatable
    "terminal-enter", // repeatable
    "terminal-tab", // repeatable
    "terminal-shift+arrow-right", // repeatable
    "terminal-shift+arrow-left", // repeatable
    "terminal-backspace", // repeatable
    "terminal-space", // repeatable
    "terminal-command-left", // repeatable
    "terminal-command-right", // repeatable
    "terminal-command-c", // repeatable
    "terminal-command-v", // repeatable
    "terminal-set-output",
    "terminal-set-prompt",
    "terminal-set-present-working-directory",
    // from ExternalActions
    "external-browser",
    "external-browser-scroll",
    "external-web-preview",
    // from SlideActions
    "slide-display",
];