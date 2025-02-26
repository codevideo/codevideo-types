import { IAction } from "../interfaces/IAction";
import { MouseAction } from "../types/MouseAction";
import { isMouseAction } from "./isMouseAction";

export const filterMouseActions = (actions: Array<IAction>): Array<MouseAction> => {
    return actions.filter(isMouseAction);
}