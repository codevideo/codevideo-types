import { IAction } from "../interfaces/IAction";
import { Project } from "../types/toplevel/Project";
import { isValidAction } from "./isValidAction";

export const isValidActions = (project: Project): project is Array<IAction> => {
    // ensure that project is type of array and that every element is valid action
    return Array.isArray(project) && project.every((action, index) => {
        const result = isValidAction(action);
        if (!result) {
            console.log(`Invalid action at action index ${index}: ${JSON.stringify(action)}`);
        }
        return result;
    });
}