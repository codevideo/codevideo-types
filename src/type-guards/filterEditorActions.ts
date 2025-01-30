import { IAction } from "../interfaces/IAction";
import { EditorAction } from "../types/EditorAction";
import { isEditorAction } from "./isEditorAction";

export const filterEditorActions = (actions: Array<IAction>): Array<EditorAction> => {
    return actions.filter(isEditorAction);
}