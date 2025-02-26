import { ICourse } from "../interfaces/toplevel/ICourse";
import { Project } from "../types/toplevel/Project";

export const isCourse = (project: Project): project is ICourse => {
    return (project as ICourse).lessons !== undefined;
}