// export const generateFinalSnapshotFromLesson = (lesson: ILesson): ICourseSnapshot => {
//     // use the initial snapshot, apply actions, and return the final snapshot
//     let finalSnapshot: ICourseSnapshot = lesson.initialSnapshot;
//     lesson.actions.forEach(action => {
//         finalSnapshot = applyAction(finalSnapshot, action);
//     });
//     return finalSnapshot;
// }