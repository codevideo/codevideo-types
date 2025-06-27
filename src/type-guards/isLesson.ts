import { ILesson } from "../interfaces/toplevel/ILesson";
import { Project } from "../types/toplevel/Project";
import { isValidAction } from "../validators/isValidAction";

export const isLesson = (project: Project): project is ILesson => {
    // Check if project is an object and not null/undefined
    if (!project || typeof project !== 'object' || Array.isArray(project)) {
        return false;
    }

    const candidate = project as any;

    // Check required string properties
    if (typeof candidate.id !== 'string' || 
        typeof candidate.name !== 'string' || 
        typeof candidate.description !== 'string') {
        return false;
    }

    // Check that actions exists and is an array
    if (!Array.isArray(candidate.actions)) {
        return false;
    }

    // Check that all actions are valid IAction objects
    if (!candidate.actions.every((action: any) => isValidAction(action))) {
        return false;
    }

    // Optional properties (if they exist, they should be of correct type)
    if (candidate.initialSnapshot !== undefined && 
        (typeof candidate.initialSnapshot !== 'object' || candidate.initialSnapshot === null)) {
        return false;
    }

    if (candidate.finalSnapshot !== undefined && 
        (typeof candidate.finalSnapshot !== 'object' || candidate.finalSnapshot === null)) {
        return false;
    }

    return true;
}