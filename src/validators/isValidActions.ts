import { IActionValidationError } from "../interfaces/IActionValidationError";
import { IActionValidationResult } from "../interfaces/IActionValidationResult";
import { Project } from "../types/toplevel/Project";
import { isValidAction } from "./isValidAction";

export const isValidActions = (project: Project): IActionValidationResult => {
    const errors: IActionValidationError[] = [];
    
    // Check if project is an array
    if (!Array.isArray(project)) {
        errors.push({
            message: "Project must be an array",
            actionIndex: -1
        });
        return { isValid: false, errors };
    }
    
    // Validate each action
    project.forEach((action, index) => {
        const result = isValidAction(action);
        if (!result) {
            errors.push({
                message: `Invalid action at action index ${index}: ${JSON.stringify(action)}`,
                actionIndex: index
            });
        }
    });
    
    const isValid = errors.length === 0;
    return { isValid, errors };
}