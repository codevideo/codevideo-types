import { IFileStructure } from "../IFileStructure";

export interface IEditorSnapshot {
    fileStructure: IFileStructure;
    currentFile: string | null;
    openFiles: Array<string>;
    terminalContents: string | null;
}