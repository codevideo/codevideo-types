import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";

export const isAuthorAction = (action: IAction): action is AuthorAction=> {
    return (action.name as string) in {
        'author-speak-before': true,
        'author-speak-after': true,
        'author-speak-during': true,
        'author-wait': true,
    };
}





