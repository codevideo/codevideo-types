import { IAction } from "../interfaces/IAction";
import { SlideAction } from "../types/SlideAction";
import { isSlideAction } from "./isSlideAction";

export const filterSlideActions = (actions: Array<IAction>): Array<SlideAction> => {
    return actions.filter(isSlideAction);
}