import { IAction } from "../IAction";
import { ICourseSnapshot } from "./ICourseSnapshot";

// Represents a lesson in a software course
export interface ILesson {
    id: string;
    name: string;
    description: string;
    initialSnapshot: ICourseSnapshot;
    actions: Array<IAction>;
    finalSnapshot?: ICourseSnapshot; // in the case where the lesson isn't complete, you of course don't have a final snapshot
}