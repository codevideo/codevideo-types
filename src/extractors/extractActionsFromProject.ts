import { IAction } from "../interfaces/IAction"
import { isCourse } from "../type-guards/isCourse"
import { isLesson } from "../type-guards/isLesson"
import { Project } from "../types/toplevel/Project"
import { isValidActions } from "../validators/isValidActions"

export const extractActionsFromProject = (project: Project, currentLessonIndex: number | null): Array<IAction> => {
    if (isCourse(project) && project.lessons && currentLessonIndex !== null && currentLessonIndex !== -1) {
      return project.lessons[currentLessonIndex]?.actions || []
    }
    if (isLesson(project)) {
      return project.actions
    }
    if (isValidActions(project)) {
      return project;
    }
    return []
  }