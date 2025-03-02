import { IAction } from "../interfaces/IAction";
import { EditorAction } from "../types/EditorAction";

export const isEditorAction = (action: IAction): action is EditorAction => {
    // if the action starts with 'editor-', it is an editor action
    return action.name.startsWith('editor-');
}