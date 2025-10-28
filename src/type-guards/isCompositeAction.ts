import { IAction } from "../interfaces/IAction";
import { CompositeAction } from "../types/CompositeAction";

export const isCompositeAction = (action: IAction): action is CompositeAction => {
    // if the action starts with 'composite-', it is a composite action
    return action.name.startsWith('composite-');
}