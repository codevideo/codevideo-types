import { ILesson } from "../interfaces/toplevel/ILesson";
import { Project } from "../types/toplevel/Project";

export const isLesson = (project: Project): project is ILesson => {
    return (project as ILesson).actions !== undefined;
}