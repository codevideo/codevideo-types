// convenience type for the project type used in the studio
// (creators can choose between a course, lesson, or actions)

import { IAction } from "../../interfaces/IAction";
import { ICourse } from "../../interfaces/toplevel/ICourse";
import { ILesson } from "../../interfaces/toplevel/ILesson";

// see also 'ProjectType.ts'
export type Project = Array<IAction> | ILesson | ICourse;