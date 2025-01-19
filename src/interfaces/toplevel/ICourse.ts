import { ILesson } from "./ILesson";

export interface ICourse {
    id: string;
    name: string;
    description: string;
    primaryLanguage: string;
    lessons: Array<ILesson>;
}