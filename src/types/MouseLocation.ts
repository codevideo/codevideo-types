export type MouseLocation = 'file-explorer' 
| 'file-explorer-file'
| 'file-explorer-folder' 
// file explorer context menu
| 'file-explorer-context-menu-new-file'
| 'file-explorer-context-menu-new-folder'
// file context menu
| 'file-explorer-file-context-menu-rename'
| 'file-explorer-file-context-menu-delete'
// folder context menu
| 'file-explorer-folder-context-menu-new-file'
| 'file-explorer-folder-context-menu-new-folder'
| 'file-explorer-folder-context-menu-rename'
| 'file-explorer-folder-context-menu-delete'
| 'editor'
| 'editor-context-menu'
| 'editor-tab'
| 'editor-tab-close'
| 'terminal'
| 'terminal-tab'
| 'terminal-tab-close'
| 'terminal-context-menu'
// unsaved changes dialog
| 'unsaved-changes-dialog'
| 'unsaved-changes-dialog-button-save'
| 'unsaved-changes-dialog-button-dont-save'
| 'unsaved-changes-dialog-button-cancel'