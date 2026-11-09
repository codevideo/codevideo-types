import { IAction } from "../interfaces/IAction";
import { ClipboardAction } from "../types/ClipboardAction";
import { isClipboardAction } from "./isClipboardAction";

export const filterClipboardActions = (actions: Array<IAction>): Array<ClipboardAction> => {
    return actions.filter(isClipboardAction);
}
