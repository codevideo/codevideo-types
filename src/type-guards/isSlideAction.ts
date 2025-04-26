import { IAction } from "../interfaces/IAction";
import { SlideAction } from "../types/SlideAction";

export const isSlideAction = (action: IAction): action is SlideAction => {
    // if the action starts with 'slide-', it is a slide action
    return action.name.startsWith('slide-');
}