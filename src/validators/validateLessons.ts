import { ILesson } from "../interfaces/toplevel/ILesson";

// given an array of lessons in order, validate that the end state of each lesson is the same as the start state of the next lesson
export const validateLessons = (lessons: ILesson[]) => {
    for (let i = 0; i < lessons.length - 1; i++) {
        const snapshotAtEndOfCurrentLesson = lessons[i].finalSnapshot;
        const snapshotAtStartOfNextLesson = lessons[i + 1].initialSnapshot;
       
        // deep compare the two snapshots
        if (!deepEqual(snapshotAtEndOfCurrentLesson, snapshotAtStartOfNextLesson)) {
            throw new Error(`Lessons ${lessons[i].id} and ${lessons[i + 1].id} are not compatible`);
        }
    }
}

// deep compare two objects
const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object') return false;
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (const key in a) {
        if (!(key in b)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}