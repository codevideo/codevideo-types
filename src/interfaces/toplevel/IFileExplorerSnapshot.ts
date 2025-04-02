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
    renameFileInputValue: string;
    renameFolderInputValue: string;
}