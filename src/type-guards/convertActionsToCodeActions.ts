import { IAction } from "../interfaces/IAction";
import { CodeAction } from "../types/CodeAction";
import { isCodeAction } from "./isCodeAction";

export const convertActionsToCodeActions = (actions: Array<IAction>): Array<CodeAction> => {
    return actions.filter(isCodeAction);
}