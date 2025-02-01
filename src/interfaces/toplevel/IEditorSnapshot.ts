import { IEditorPosition } from "../IEditorPosition";
import { IFileStructure } from "../IFileStructure";

export interface IEditorSnapshot {
    fileStructure: IFileStructure;
    currentFile: string | null;
    openFiles: Array<string>;
    terminalContents: string | null;
    currentCaretPosition: IEditorPosition;
    currentHighlightCoordinates: { start: IEditorPosition, end: IEditorPosition } | null;
}