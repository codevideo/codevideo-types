import { IAction } from "../interfaces/IAction";
import { ClipboardAction } from "../types/ClipboardAction";

export const isClipboardAction = (action: IAction): action is ClipboardAction => {
    // if the action starts with 'clipboard-', it is a clipboard action
    return action.name.startsWith('clipboard-');
}
