import { ICourseSnapshot } from "../interfaces/toplevel/ICourseSnapshot";

// Represents a completely empty initial snapshot for a course
export const getBlankInitialSnapshot = (): ICourseSnapshot => {
    return {
        isUnsavedChangesDialogOpen: false,
        unsavedFileName: '',
        fileExplorerSnapshot: {
            isFileExplorerContextMenuOpen: false,
            isFileContextMenuOpen: false,
            isFolderContextMenuOpen: false,
            isNewFileInputVisible: false,
            isNewFolderInputVisible: false,
            isRenameFileInputVisible: false,
            isRenameFolderInputVisible: false,
            newFileInputValue: '',
            newFolderInputValue: '',
            renameFileInputValue: '',
            renameFolderInputValue: '',
            originalFileBeingRenamed: '',
            originalFolderBeingRenamed: '',
            newFileParentPath: '',
            newFolderParentPath: '',
            fileStructure: {},
        },
        editorSnapshot: {
            isEditorContextMenuOpen: false,
            editors: []
        },
        terminalSnapshot: {
            terminals: []
        },
        mouseSnapshot: {
            location: 'editor',
            currentHoveredFileName: '',
            currentHoveredFolderName: '',
            currentHoveredEditorTabFileName: '',
            x: 960,
            y: 540,
            timestamp: 0,
            type: 'move',
            buttonStates: {
                left: false,
                right: false,
                middle: false,
            },
            scrollPosition: {
                x: 0,
                y: 0
            },
        },
        authorSnapshot: {
            authors: []
        }
    }
}