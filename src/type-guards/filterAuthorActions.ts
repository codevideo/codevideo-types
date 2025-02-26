import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";
import { isAuthorAction } from "./isAuthorAction";

export const filterAuthorActions = (actions: Array<IAction>): Array<AuthorAction> => {
    return actions.filter(isAuthorAction);
}