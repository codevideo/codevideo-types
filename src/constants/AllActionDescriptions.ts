export const AllActionDescriptions: Array<{ name: string, description: string, valueDescription: string }> = [
    // from AuthorActions
    { name: "author-speak-before", description: "Shows the value as a caption, speaks it, and waits for the speech to end before the next action.", valueDescription: "The content the author speaks before." },
    { name: "author-speak-after", description: "Same as author-speak-before: shows the caption, speaks, and waits before the next action. Use author-speak-before instead.", valueDescription: "The content the author speaks." },
    { name: "author-speak-during", description: "Starts speaking and goes straight on to the next actions without waiting for the speech to end. Prefer author-speak-before.", valueDescription: "The content the author speaks." },
    { name: "author-wait", description: "Author waits for given amount of time in milliseconds.", valueDescription: "The amount of time to wait in milliseconds." },
    // from EditorActions
    { name: "editor-type", description: "Types into the active editor: the file last created with the mouse or opened with file-explorer-open-file.", valueDescription: "The text to type, including newlines." },
    { name: "editor-save", description: "Saves the active editor. Compile checks and file reads only see saved text, so save after typing.", valueDescription: "Always '1'." }, // repeatable
    { name: "editor-arrow-up", description: "Move the editor caret up one row.", valueDescription: "The number of rows to move up." }, // repeatable
    { name: "editor-arrow-down", description: "Move the editor caret down one row.", valueDescription: "The number of rows to move down." }, // repeatable
    { name: "editor-arrow-left", description: "Move the editor caret left one column.", valueDescription: "The number of columns to move left." }, // repeatable
    { name: "editor-arrow-right", description: "Move the editor caret right one column.", valueDescription: "The number of columns to move right." }, // repeatable
    { name: "editor-enter", description: "Press the Enter key in the editor.", valueDescription: "The number of times to press Enter." }, // repeatable
    { name: "editor-tab", description: "Press the Tab key in the editor.", valueDescription: "The number of times to press Tab." }, // repeatable
    { name: "editor-shift+arrow-left", description: "Hold Shift and move the editor caret left.", valueDescription: "The number of columns to move left." }, // repeatable
    { name: "editor-shift+arrow-right", description: "Hold Shift and move the editor caret right.", valueDescription: "The number of columns to move right." }, // repeatable
    { name: "editor-shift+arrow-down", description: "Hold Shift and move the editor caret down.", valueDescription: "The number of rows to move down." }, // repeatable
    { name: "editor-shift+arrow-up", description: "Hold Shift and move the editor caret up.", valueDescription: "The number of rows to move up." }, // repeatable
    { name: "editor-cmd+d", description: "Press Cmd+D in the editor.", valueDescription: "The number of times to press Cmd+D." }, // repeatable
    { name: "editor-backspace", description: "Press the Backspace key in the editor.", valueDescription: "The number of times to press Backspace." }, // repeatable
    { name: "editor-space", description: "Press the Space key in the editor.", valueDescription: "The number of times to press Space." }, // repeatable
    { name: "editor-highlight-code", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. To point at code, bring its file forward with mouse-move-editor-tab and talk about it.", valueDescription: "The code to highlight." },
    { name: "editor-delete-line", description: "Delete the current line in the editor.", valueDescription: "The line to delete." },
    { name: "editor-command+shift+arrow-right", description: "Extend selection to the end of the logical line, excluding the newline.", valueDescription: "Number of key presses." },
    { name: "editor-command+shift+arrow-left", description: "Extend selection to the absolute start of the logical line, excluding the newline.", valueDescription: "Number of key presses." },
    { name: "editor-shift+end", description: "Extend selection to the end of the logical line, excluding the newline.", valueDescription: "Number of key presses." },
    { name: "editor-shift+home", description: "Extend selection to the absolute start of the logical line, excluding the newline.", valueDescription: "Number of key presses." },
    { name: "editor-command-left", description: "Hold Command and move the editor caret left.", valueDescription: "The number of columns to move left." }, // repeatable
    { name: "editor-command-right", description: "Hold Command and move the editor caret right.", valueDescription: "The number of columns to move right." }, // repeatable
    { name: "editor-command-d", description: "Hold Command and press D in the editor.", valueDescription: "The number of times to press Cmd+D." }, // repeatable
    { name: "editor-command-c", description: "Copies the selected text in the active editor to the clipboard (Cmd+C).", valueDescription: "The number of times to press Cmd+C - should typically be '1'." }, // repeatable
    { name: "editor-command-x", description: "Cuts the selected text in the active editor: copies it to the clipboard and deletes it (Cmd+X).", valueDescription: "The number of times to press Cmd+X - should typically be '1'." }, // repeatable
    { name: "editor-command-v", description: "Pastes the clipboard's text at the caret in the active editor, replacing any selected text (Cmd+V).", valueDescription: "The number of times to press Cmd+V; each press inserts the clipboard's text again." }, // repeatable
    { name: "editor-shift-down-arrow", description: "Hold Shift and move the editor caret down.", valueDescription: "The number of rows to move down." }, // repeatable
    { name: "editor-shift-up-arrow", description: "Hold Shift and move the editor caret up.", valueDescription: "The number of rows to move up." }, // repeatable
    { name: "editor-scroll-up", description: "Scroll the editor up.", valueDescription: "The number of pixels to scroll up." }, // not repeatable, needs the number of pixel offset
    { name: "editor-scroll-down", description: "Scroll the editor down.", valueDescription: "The number of pixels to scroll down." }, // not repeatable, needs the number of pixel offset
    { name: "editor-show-context-menu", description: "Show the context menu in the editor.", valueDescription: "The number of times to show the context menu - should typically be '1'." }, // repeatable, typically always '1'
    { name: "editor-hide-context-menu", description: "Hide the context menu in the editor.", valueDescription: "The number of times to hide the context menu - should typically be '1'." }, // repeatable, typically always '1'
    { name: "editor-show-diagnostics", description: "Turns on TypeScript squiggles (red errors, yellow warnings) for the rest of the lesson, or until editor-hide-diagnostics. They update each time an action that changed a file finishes, not per keystroke, so a typo shows once its editor-type ends.", valueDescription: "Always '1'." },
    { name: "editor-hide-diagnostics", description: "Turns TypeScript squiggles off again.", valueDescription: "Always '1'." },
    // from MouseActions
    { name: "mouse-move-file-explorer", description: "Move the mouse to the middle of the file explorer.", valueDescription: "The number of times to move to the middle of the file explorer - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor", description: "Move the mouse in the editor.", valueDescription: "The number of times to move in the editor." }, // repeatable
    { name: "mouse-move-editor-tab", description: "Move the mouse over an editor tab.", valueDescription: "The open file's path, e.g. 'src/index.ts'." }, // not repeatable, needs the tab name
    { name: "mouse-move-editor-tab-close", description: "Move the mouse over the close button of an editor tab.", valueDescription: "The open file's path, e.g. 'src/index.ts'." }, // not repeatable, needs the tab name
    { name: "mouse-move-terminal", description: "Move the mouse in the terminal.", valueDescription: "The number of times to move in the terminal." }, // repeatable
    { name: "mouse-move-terminal-tab", description: "Move the mouse over a terminal tab.", valueDescription: "The name of the tab to move over." }, // NOT repeatable, needs the tab name
    { name: "mouse-move-terminal-tab-close", description: "Move the mouse over the close button of a terminal tab.", valueDescription: "The name of the tab to move over." }, // NOT repeatable, needs the tab name
    { name: "mouse-move-file-explorer-file", description: "Move the mouse over a file in the file explorer.", valueDescription: "The file's path, e.g. 'src/index.ts'." }, // NOT repeatable, needs the file name
    { name: "mouse-move-file-explorer-folder", description: "Move the mouse over a folder in the file explorer.", valueDescription: "The folder's path, e.g. 'src'." }, // NOT repeatable, needs the folder name
    { name: "mouse-move-to-coordinates-pixels", description: "Move the mouse to specific coordinates in pixels.", valueDescription: "The coordinates in pixels to move to." }, // NOT repeatable, needs the coordinates in pixels
    { name: "mouse-move-to-coordinates-percent", description: "Move the mouse to specific coordinates in percent.", valueDescription: "The coordinates in percent to move to." }, // NOT repeatable, needs the coordinates in percent
    { name: "mouse-move-file-explorer-context-menu-new-file", description: "Move the mouse to the new file option in the file explorer context menu.", valueDescription: "The number of times to move to the new file option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-context-menu-new-folder", description: "Move the mouse to the new folder option in the file explorer context menu.", valueDescription: "The number of times to move to the new folder option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-file-context-menu-rename", description: "Move the mouse to the rename option in the file context menu.", valueDescription: "The number of times to move to the rename option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-file-context-menu-delete", description: "Move the mouse to the delete option in the file context menu.", valueDescription: "The number of times to move to the delete option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-folder-context-menu-new-file", description: "Move the mouse to the new file option in the folder context menu.", valueDescription: "The number of times to move to the new file option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-folder-context-menu-new-folder", description: "Move the mouse to the new folder option in the folder context menu.", valueDescription: "The number of times to move to the new folder option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-folder-context-menu-rename", description: "Move the mouse to the rename option in the folder context menu.", valueDescription: "The number of times to move to the rename option - should typically be '1'." }, // repeatable
    { name: "mouse-move-file-explorer-folder-context-menu-delete", description: "Move the mouse to the delete option in the folder context menu.", valueDescription: "The number of times to move to the delete option - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor-context-menu-go-to-definition", description: "Move the mouse to the go to definition option in the editor context menu.", valueDescription: "The number of times to move to the go to definition option - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor-context-menu-cut", description: "Move the mouse to the cut option in the editor context menu.", valueDescription: "The number of times to move to the cut option - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor-context-menu-copy", description: "Move the mouse to the copy option in the editor context menu.", valueDescription: "The number of times to move to the copy option - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor-context-menu-paste", description: "Move the mouse to the paste option in the editor context menu.", valueDescription: "The number of times to move to the paste option - should typically be '1'." }, // repeatable
    { name: "mouse-move-unsaved-changes-dialog-button-save", description: "Move the mouse to the save button in the unsaved changes dialog.", valueDescription: "The number of times to move to the save button - should typically be '1'." }, // repeatable
    { name: "mouse-move-unsaved-changes-dialog-button-dont-save", description: "Move the mouse to the don't save button in the unsaved changes dialog.", valueDescription: "The number of times to move to the don't save button - should typically be '1'." }, // repeatable
    { name: "mouse-move-unsaved-changes-dialog-button-cancel", description: "Move the mouse to the cancel button in the unsaved changes dialog.", valueDescription: "The number of times to move to the cancel button - should typically be '1'." }, // repeatable
    { name: "mouse-move-editor-diagnostic", description: "Moves the mouse onto a squiggle in the active editor, then shows the hover with that error's message, as VS Code does, so the narration can read it out. The hover stays up through author-speak and author-wait actions; any other action closes it. Needs squiggles on (editor-show-diagnostics or the isDiagnosticsVisible option). The location must be inside a diagnostic, e.g. one codevideo_compile_lesson reports.", valueDescription: "The active file's path, line and column, 1-based and separated by colons, e.g. 'src/generics.ts:12:38'. Leave out the column to use the first squiggle on that line." }, // NOT repeatable, needs the location
    { name: "mouse-move", description: "Move the mouse to specific coordinates.", valueDescription: "The coordinates to move to. See the codevideo-mouse library on how this string is generated." }, // NOT repeatable, needs the coordinates and times array
    { name: "mouse-left-click", description: "Left-clicks where the mouse is.", valueDescription: "The number of times to perform a left click - should typically be '1'." }, // repeatable
    { name: "mouse-double-left-click", description: "Double-clicks where the mouse is.", valueDescription: "The number of times to perform a double left click - should typically be '1'." }, // repeatable
    { name: "mouse-triple-left-click", description: "Triple-clicks where the mouse is.", valueDescription: "The number of times to perform a triple left click - should typically be '1'." }, // repeatable
    { name: "mouse-right-click", description: "Right-clicks where the mouse is. Over the file explorer, a file or a folder, this opens its context menu.", valueDescription: "The number of times to perform a right click - should typically be '1'." }, // repeatable
    { name: "mouse-right-double-click", description: "Right-clicks twice where the mouse is.", valueDescription: "The number of times to perform a double right click - should typically be '1'." }, // repeatable
    { name: "mouse-right-triple-click", description: "Right-clicks three times where the mouse is.", valueDescription: "The number of times to perform a triple right click - should typically be '1'." }, // repeatable
    // from FileExplorerActions
    { name: "file-explorer-set-file-contents", description: "Replaces a file's contents instantly, with nothing on screen showing it. In lessons, type with editor-type.", valueDescription: "The contents to set for the file." },
    { name: "file-explorer-set-file-caret-position", description: "Sets the caret position of a file in the file explorer.", valueDescription: "The file name, row, and col to set the caret position." }, // not repeatable, needs the file name, row, and col
    { name: "file-explorer-create-file", description: "Adds a file instantly, with nothing on screen showing it. In lessons, create files with the mouse (right-click, New File) or with touch in the terminal.", valueDescription: "The path of the file to create." },
    { name: "file-explorer-open-file", description: "Opens a file from the file explorer in the editor, making it the active editor.", valueDescription: "The file's path, e.g. 'src/index.ts'. Never '1': that opens a stray editor and the typing after it is lost." },
    { name: "file-explorer-close-file", description: "Close a file in the file explorer.", valueDescription: "The name of the file to close." },
    { name: "file-explorer-rename-file", description: "Rename a file in the file explorer.", valueDescription: "The old and new names for the file." },
    { name: "file-explorer-delete-file", description: "Delete a file in the file explorer.", valueDescription: "The name of the file to delete." },
    { name: "file-explorer-move-file", description: "Move a file in the file explorer.", valueDescription: "The old and new paths for the file." },
    { name: "file-explorer-copy-file", description: "Copy a file in the file explorer.", valueDescription: "The old and new paths for the file." },
    { name: "file-explorer-create-folder", description: "Adds a folder instantly, with nothing on screen showing it. In lessons, create folders with the mouse (right-click, New Folder) or with mkdir in the terminal.", valueDescription: "The path of the folder to create." },
    { name: "file-explorer-expand-folder", description: "Expand a folder in the file explorer.", valueDescription: "The name of the folder to expand." },
    { name: "file-explorer-collapse-folder", description: "Collapse a folder in the file explorer.", valueDescription: "The name of the folder to collapse." },
    { name: "file-explorer-rename-folder", description: "Rename a folder in the file explorer.", valueDescription: "The old and new names for the folder." },
    { name: "file-explorer-delete-folder", description: "Delete a folder in the file explorer.", valueDescription: "The name of the folder to delete." },
    { name: "file-explorer-toggle-folder", description: "Toggle a folder in the file explorer.", valueDescription: "The name of the folder to toggle." },
    { name: "file-explorer-move-folder", description: "Move a folder in the file explorer.", valueDescription: "The old and new paths for the folder." },
    { name: "file-explorer-copy-folder", description: "Copy a folder in the file explorer.", valueDescription: "The old and new paths for the folder." },
    { name: "file-explorer-show-context-menu", description: "Show the context menu in the file explorer.", valueDescription: "The position to show the context menu." },
    { name: "file-explorer-hide-context-menu", description: "Hide the context menu in the file explorer.", valueDescription: "The position to hide the context menu." },
    { name: "file-explorer-show-file-context-menu", description: "Show the file context menu in the file explorer.", valueDescription: "The position to show the file context menu." },
    { name: "file-explorer-hide-file-context-menu", description: "Hide the file context menu in the file explorer.", valueDescription: "The position to hide the file context menu." },
    { name: "file-explorer-show-folder-context-menu", description: "Show the folder context menu in the file explorer.", valueDescription: "The position to show the folder context menu." },
    { name: "file-explorer-hide-folder-context-menu", description: "Hide the folder context menu in the file explorer.", valueDescription: "The position to hide the folder context menu." },
    { name: "file-explorer-show-new-file-input", description: "Show the new file input in the file explorer.", valueDescription: "The position to show the new file input." },
    { name: "file-explorer-show-new-folder-input", description: "Show the new folder input in the file explorer.", valueDescription: "The position to show the new folder input." },
    { name: "file-explorer-hide-new-file-input", description: "Hide the new file input in the file explorer.", valueDescription: "The position to hide the new file input." },
    { name: "file-explorer-hide-new-folder-input", description: "Hide the new folder input in the file explorer.", valueDescription: "The position to hide the new folder input." },
    { name: "file-explorer-type-new-file-input", description: "Type in the new file input in the file explorer.", valueDescription: "The text to type in the new file input." },
    { name: "file-explorer-clear-new-file-input", description: "Clear the new file input in the file explorer.", valueDescription: "The position to clear the new file input." },
    { name: "file-explorer-type-new-folder-input", description: "Type in the new folder input in the file explorer.", valueDescription: "The text to type in the new folder input." },
    { name: "file-explorer-clear-new-folder-input", description: "Clear the new folder input in the file explorer.", valueDescription: "The position to clear the new folder input." },
    { name: "file-explorer-rename-file-draft-state", description: "Rename a file in draft state in the file explorer.", valueDescription: "The old and new names for the file." },
    { name: "file-explorer-rename-folder-draft-state", description: "Rename a folder in draft state in the file explorer.", valueDescription: "The old and new names for the folder." },
    { name: "file-explorer-type-rename-file-input", description: "Type in the rename file input in the file explorer.", valueDescription: "The text to type in the rename file input." },
    { name: "file-explorer-type-rename-folder-input", description: "Type in the rename folder input in the file explorer.", valueDescription: "The text to type in the rename folder input." },
    { name: "file-explorer-enter-new-file-input", description: "Presses Enter in the new-file input. This creates the file and opens it in the editor, so type into it next without reopening it.", valueDescription: "The number of times to press enter in the new file input - should typically be '1'." }, // repeatable
    { name: "file-explorer-enter-new-folder-input", description: "Presses Enter in the new-folder input, creating the folder.", valueDescription: "The number of times to press enter in the new folder input - should typically be '1'." }, // repeatable
    { name: "file-explorer-enter-rename-file-input", description: "Enter the rename file input in the file explorer.", valueDescription: "The number of times to press enter in the rename file input - should typically be '1'." }, // repeatable
    { name: "file-explorer-enter-rename-folder-input", description: "Enter the rename folder input in the file explorer.", valueDescription: "The number of times to press enter in the rename folder input - should typically be '1'." }, // repeatable
    // from TerminalActions
    { name: "terminal-open", description: "Opens the terminal.", valueDescription: "The number of times to open the terminal - should typically be '1'." },
    { name: "terminal-type", description: "Types in the terminal; terminal-enter runs it. Supported commands: cat, cd, cp, echo, ls, mkdir, mv, pwd, touch, tree. touch <path> creates a file without opening it.", valueDescription: "The text to type in the terminal." },
    { name: "terminal-arrow-up", description: "Arrow up in the terminal. Shows the previous command, if any.", valueDescription: "The number of times to press arrow up in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-arrow-down", description: "Arrow down in the terminal.", valueDescription: "The number of times to press arrow down in the terminal." }, // repeatable
    { name: "terminal-arrow-left", description: "Arrow left in the terminal.", valueDescription: "The number of times to press arrow left in the terminal." }, // repeatable
    { name: "terminal-arrow-right", description: "Arrow right in the terminal.", valueDescription: "The number of times to press arrow right in the terminal." }, // repeatable
    { name: "terminal-enter", description: "Enter key in the terminal. Submits the command.", valueDescription: "The number of times to press enter in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-tab", description: "Tab key in the terminal.", valueDescription: "The number of times to press tab in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-shift+arrow-right", description: "Shift + arrow right in the terminal.", valueDescription: "The number of times to press shift + arrow right in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-shift+arrow-left", description: "Shift + arrow left in the terminal.", valueDescription: "The number of times to press shift + arrow left in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-backspace", description: "Backspace key in the terminal.", valueDescription: "The number of times to press backspace in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-space", description: "Space key in the terminal.", valueDescription: "The number of times to press space in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-command-left", description: "Command + arrow left in the terminal.", valueDescription: "The number of times to press command + arrow left in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-command-right", description: "Command + arrow right in the terminal.", valueDescription: "The number of times to press command + arrow right in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-command-c", description: "Command + c in the terminal.", valueDescription: "The number of times to press command + c in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-command-v", description: "Command + v in the terminal.", valueDescription: "The number of times to press command + v in the terminal - should typically be '1'." }, // repeatable
    { name: "terminal-set-output", description: "Shows output in the terminal, e.g. for a command the terminal can't run itself (like npm install).", valueDescription: "The output to set in the terminal. Used to simulate terminal output." },
    { name: "terminal-set-prompt", description: "Sets the prompt in the terminal.", valueDescription: "The prompt to set in the terminal. Can be used for custom terminal prompts." },
    { name: "terminal-set-present-working-directory", description: "Sets the present working directory in the terminal.", valueDescription: "The directory to set as the present working directory in the terminal." },
    // from ExternalActions
    { name: "external-browser", description: "Show a browser. The value can be any valid URL. Won't work for URLs that have blocked iframe usage.", valueDescription: "The URL to open in the external browser." },
    { name: "external-browser-scroll", description: "Scrolls the external browser.", valueDescription: "The number of pixels offset to scroll in the external browser." },
    { name: "external-web-preview", description: "Preview the current codebase in an external web browser", valueDescription: "The number of times to open the preview - should typically be '1'." },
    // from SlideActions
    { name: "slide-display", description: "Show a slide. The value can be any valid markdown representing the slide.", valueDescription: "The markdown content of the slide." },
    // from CompositeActions
    { name: "composite-create-file-with-mouse", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Create the file with these steps instead: mouse-move-file-explorer, mouse-right-click, mouse-move-file-explorer-context-menu-new-file, mouse-left-click, file-explorer-type-new-file-input, file-explorer-enter-new-file-input.", valueDescription: "The name of the file to create." },
    { name: "composite-create-file-with-terminal", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Type touch <path> with terminal-type, then terminal-enter, instead.", valueDescription: "The name of the file to create." },
    { name: "composite-create-folder-with-mouse", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Create the folder with these steps instead: mouse-move-file-explorer, mouse-right-click, mouse-move-file-explorer-context-menu-new-folder, mouse-left-click, file-explorer-type-new-folder-input, file-explorer-enter-new-folder-input.", valueDescription: "The name of the folder to create." },
    { name: "composite-create-folder-with-terminal", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Type mkdir <path> with terminal-type, then terminal-enter, instead.", valueDescription: "The name of the folder to create." },
    { name: "composite-close-all-editors-with-mouse", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Close editors one at a time instead, with mouse-move-editor-tab-close and mouse-left-click.", valueDescription: "The number of times to execute this action - should typically be '1'." },
    { name: "composite-close-all-editors-with-keyboard", description: "Not supported yet: the IDE and the renderer ignore it, so nothing happens. Close editors one at a time instead, with mouse-move-editor-tab-close and mouse-left-click.", valueDescription: "The number of times to execute this action - should typically be '1'." },
    // from ClipboardActions
    { name: "clipboard-set-text", description: "Puts text on the clipboard as if it was copied somewhere off screen, such as a website, so a later editor-command-v pastes it. Nothing changes on screen.", valueDescription: "The text, including newlines." },
    { name: "clipboard-clear", description: "Empties the clipboard. Nothing changes on screen.", valueDescription: "Should be '1'." },
]
