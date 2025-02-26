import { IAction } from "../interfaces/IAction";
import { ExternalAction } from "../types/ExternalAction";

export const isExternalAction = (action: IAction): action is ExternalAction => {
    return (action.name as string) in {
        'external-browser': true,
    };
}