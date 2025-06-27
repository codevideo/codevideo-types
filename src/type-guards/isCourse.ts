import { ICourse } from "../interfaces/toplevel/ICourse";
import { Project } from "../types/toplevel/Project";
import { isLesson } from "./isLesson";

export const isCourse = (project: Project): project is ICourse => {
    // Check if project is an object and not null/undefined
    if (!project || typeof project !== 'object' || Array.isArray(project)) {
        return false;
    }

    const candidate = project as any;

    // Check required string properties
    if (typeof candidate.id !== 'string' || 
        typeof candidate.name !== 'string' || 
        typeof candidate.description !== 'string' ||
        typeof candidate.primaryLanguage !== 'string') {
        return false;
    }

    // Check that lessons exists and is an array
    if (!Array.isArray(candidate.lessons)) {
        return false;
    }

    // Check that all lessons are valid ILesson objects
    if (!candidate.lessons.every((lesson: any) => isLesson(lesson))) {
        return false;
    }

    return true;
}