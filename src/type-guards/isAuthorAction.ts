import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";

export const isAuthorAction = (action: IAction): action is AuthorAction => {
    // if the action starts with 'author-', it is an author action
    return action.name.startsWith('author-');
}