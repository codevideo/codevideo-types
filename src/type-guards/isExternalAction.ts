import { IAction } from "../interfaces/IAction";
import { ExternalAction } from "../types/ExternalAction";

export const isExternalAction = (action: IAction): action is ExternalAction => {
    // if the action starts with 'external-', it is an external action
    return action.name.startsWith('external-');
}