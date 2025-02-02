import { IEditor } from "../IEditor";

// represents a multi tabbed editor where the first openFile is considered to be the "current" file
export interface IEditorSnapshot {
    editors: Array<IEditor>;
}