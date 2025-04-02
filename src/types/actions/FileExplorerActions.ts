export type FileExplorerActions = "file-explorer-set-present-working-directory"
 | "file-explorer-set-file-contents"
 | "file-explorer-create-file" 
 | "file-explorer-open-file"
 | "file-explorer-close-file"
 | "file-explorer-rename-file"
 | "file-explorer-delete-file"
 | "file-explorer-move-file"
 | "file-explorer-copy-file"
 | "file-explorer-create-folder"
 | "file-explorer-expand-folder"
 | "file-explorer-collapse-folder"
 | "file-explorer-rename-folder"
 | "file-explorer-delete-folder"
 | "file-explorer-toggle-folder"
 | "file-explorer-move-folder"
 | "file-explorer-copy-folder"
 | "file-explorer-type"
 | "file-explorer-enter"
 // all new ones to support creating and renaming files in the file explorer
 | "file-explorer-show-new-file-input"
 | "file-explorer-show-new-folder-input"
 | "file-explorer-hide-new-file-input"
 | "file-explorer-hide-new-folder-input"
 | "file-explorer-type-new-file-input"
 | "file-explorer-type-new-folder-input"
 | "file-explorer-rename-file-draft-state"
 | "file-explorer-rename-folder-draft-state"
 | "file-explorer-type-rename-file-input"
 | "file-explorer-type-rename-folder-input"
 | "file-explorer-enter-new-file-input"
 | "file-explorer-enter-new-folder-input"
 | "file-explorer-enter-rename-file-input"
 | "file-explorer-enter-rename-folder-input"