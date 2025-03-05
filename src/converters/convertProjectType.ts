import { IAction } from "../interfaces/IAction";
import { ICourse } from "../interfaces/toplevel/ICourse";
import { ILesson } from "../interfaces/toplevel/ILesson";
import { isCourse } from "../type-guards/isCourse";
import { isLesson } from "../type-guards/isLesson";
import { Project } from "../types/toplevel/Project";
import { ProjectType } from "../types/toplevel/ProjectType";
import { isValidActions } from "../validators/isValidActions";

export const convertProjectType = (
    currentProjectContent: Project,
    targetProjectType: ProjectType
): Project | void => {
    // 'upgrades':
    // actions -> lesson
    if (isValidActions(currentProjectContent) && targetProjectType === 'lesson') {
        return {
            id: '',
            name: '',
            description: '',
            actions: currentProjectContent,
        } as ILesson;
    }
    // actions -> course
    if (isValidActions(currentProjectContent) && targetProjectType === 'course') {
        return {
            id: '',
            name: '',
            description: '',
            primaryLanguage: '',
            lessons: [
                {
                    id: '',
                    name: '',
                    description: '',
                    actions: currentProjectContent,
                }
            ]
        } as ICourse;
    }
    // lesson -> course
    if (isLesson(currentProjectContent) && targetProjectType === 'course') {
        return {
            id: '',
            name: '',
            description: '',
            primaryLanguage: '',
            lessons: [currentProjectContent]
        } as ICourse;
    }

    // 'downgrades':
    // course -> actions
    if (isCourse(currentProjectContent) && targetProjectType === 'actions') {
        // take all actions from all lessons and put them as one big action array
        return currentProjectContent.lessons.reduce((acc: Array<IAction>, lesson) => {
            return acc.concat(lesson.actions);
        }, []);
    }

    // course -> lesson
    if (isCourse(currentProjectContent) && targetProjectType === 'lesson') {
        // take all actions from all lessons and put them as the actions of the first lesson in the course
        return {
            id: '',
            name: '',
            description: '',
            actions: currentProjectContent.lessons.reduce((acc: Array<IAction>, lesson) => {
                return acc.concat(lesson.actions);
            }, [])
        } as ILesson;
    }

    // lesson -> actions
    if (isLesson(currentProjectContent) && targetProjectType === 'actions') {
        // simply return the actions of the lesson
        return currentProjectContent.actions;
    }

    return;
}

