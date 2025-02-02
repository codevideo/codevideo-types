import { IAction } from "../IAction";
import { ICourseSnapshot } from "./ICourseSnapshot";

// Represents a lesson in a software course
export interface ILesson {
    id: string;
    name: string;
    description: string;
    actions: Array<IAction>;
    initialSnapshot?: ICourseSnapshot; // if we are purely driven from actions, we don't need an initial snapshot
    finalSnapshot?: ICourseSnapshot; // in the case where the lesson isn't complete, you of course don't have a final snapshot
}