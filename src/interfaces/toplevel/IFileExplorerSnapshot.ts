import { IFileStructure } from "../IFileStructure";

export interface IFileExplorerSnapshot {
    fileStructure: IFileStructure;
    isFileExplorerContextMenuOpen: boolean;
    isFileContextMenuOpen: boolean;
    isFolderContextMenuOpen: boolean;
    isNewFileInputVisible: boolean;
    isNewFolderInputVisible: boolean;
    newFileInputValue: string;
    newFolderInputValue: string;
    isRenameFileInputVisible: boolean;
    isRenameFolderInputVisible: boolean;
    originalFileBeingRenamed: string;
    originalFolderBeingRenamed: string;
    renameFileInputValue: string;
    renameFolderInputValue: string;
}