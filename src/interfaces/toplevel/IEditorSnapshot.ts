import { IEditor } from "../IEditor";

// represents a multi tabbed editor. the 'active' editor is the one that has isActive set to true.
// see IEditor for more information on the properties of an editor.
export interface IEditorSnapshot {
    editors: Array<IEditor>;
}