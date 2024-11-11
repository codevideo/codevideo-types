import { ICourse } from "../interfaces/toplevel/ICourse";
import { validateLessons } from "./validateLessons";

export const validateCourse = (course: ICourse) => {
    const lessons = course.lessons;
    try {
        validateLessons(lessons);
    } catch (error) {
        throw new Error(`Course ${course.id} is invalid: ${error}`);
    }
}