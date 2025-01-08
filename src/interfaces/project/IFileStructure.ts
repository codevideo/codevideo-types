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
    caretPosition: { row: number; col: number };
    cursorPosition: { x: number, y: number };
}

export interface DirectoryNode extends BaseFileItem {
    type: 'directory';
    children?: IFileStructure;
    collapsed: boolean;
}

export type FileItem = FileLeaf | DirectoryNode;

// Type guard to check if an item is a file
export function isFile(item: FileItem): item is FileLeaf {
    return item.type === 'file';
}

// Type guard to check if an item is a directory
export function isDirectory(item: FileItem): item is DirectoryNode {
    return item.type === 'directory';
}