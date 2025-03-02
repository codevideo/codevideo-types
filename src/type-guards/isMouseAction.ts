import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";
import { MouseAction } from "../types/MouseAction";

export const isMouseAction = (action: IAction): action is MouseAction => {
    // if the action starts with 'mouse-', it is a mouse action
    return action.name.startsWith('mouse-');
}





