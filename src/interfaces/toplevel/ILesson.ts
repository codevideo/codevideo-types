import { IAction } from "../IAction";
import { IProjectSnapshot } from "../project/IProjectSnapshot";

// Represents a lesson in a software course
export interface ILesson {
    id: string;
    name: string;
    description: string;
    initialProjectSnapshot: IProjectSnapshot;
    actions: Array<IAction>;
    finalProjectSnapshot: IProjectSnapshot;
}