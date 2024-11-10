import { IAction } from "../IAction";

// Represents a lesson in a software course
export interface ILesson {
    id: string;
    name: string;
    description: string;
    steps: Array<IAction>;
}