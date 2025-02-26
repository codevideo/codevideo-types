import { IAction } from "../interfaces/IAction";
import { Project } from "../types/toplevel/Project";

export const isActions = (project: Project): project is Array<IAction> => {
    return project instanceof Array;
}