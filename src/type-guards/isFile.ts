import { FileItem, FileLeaf } from "../interfaces/IFileStructure";

// Type guard to check if an item is a file
export function isFile(item: FileItem): item is FileLeaf {
    return item.type === 'file';
}