import { IAction } from "../interfaces/IAction";
import { KeyboardAction } from "../types/KeyboardAction";
import { isKeyboardAction } from "./isKeyboardAction";

export const filterKeyboardActions = (actions: Array<IAction>): Array<KeyboardAction> => {
    return actions.filter(isKeyboardAction);
}