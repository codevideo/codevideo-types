import { IEditorPosition } from "./IEditorPosition";

export interface IEditor {
    filename: string;
    content: string;
    caretPosition: IEditorPosition;
    highlightCoordinates: { start: IEditorPosition, end: IEditorPosition } | null;
    isSaved: boolean;
}