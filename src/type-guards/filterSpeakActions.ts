import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";
import { isAuthorAction } from "./isAuthorAction";

// type guard to convert an array of IAction to an array of SpeakAction
export const filterAuthorActions = (actions: Array<IAction>): Array<AuthorAction> => {
    return actions.filter(isAuthorAction);
}