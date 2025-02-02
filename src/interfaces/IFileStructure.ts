export interface IFileStructure {
    [key: string]: FileItem;
}

export interface BaseFileItem {
    content: string;
    type: 'file' | 'directory';
}

export interface FileLeaf extends BaseFileItem {
    type: 'file';
    language: string;
    caretPosition: { row: number; col: number }; // each file has a caret position because editors remember where you left off in each file
}

export interface DirectoryNode extends BaseFileItem {
    type: 'directory';
    children?: IFileStructure;
    collapsed: boolean;
}

export type FileItem = FileLeaf | DirectoryNode;



