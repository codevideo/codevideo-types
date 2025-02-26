import { IAction } from "../interfaces/IAction";
import { ExternalAction } from "../types/ExternalAction";
import { isExternalAction } from "./isExternalAction";

export const filterExternalActions = (actions: Array<IAction>): Array<ExternalAction> => {
    return actions.filter(isExternalAction);
}