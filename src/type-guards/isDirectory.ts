import { DirectoryNode, FileItem } from "../interfaces/IFileStructure";

// Type guard to check if an item is a directory
export function isDirectory(item: FileItem): item is DirectoryNode {
    return item.type === 'directory';
}