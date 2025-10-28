import { IAction } from "../interfaces/IAction"
import { isCourse } from "../type-guards/isCourse"
import { isLesson } from "../type-guards/isLesson"
import { Project } from "../types/toplevel/Project"
import { isValidActions } from "../validators/isValidActions"

export const extractActionsFromProject = (project: Project | undefined, currentLessonIndex: number | null): Array<IAction> => {
    if (project && isCourse(project) && project.lessons && currentLessonIndex !== null && currentLessonIndex !== -1) {
      return project.lessons[currentLessonIndex]?.actions || []
    }
    if (project && isLesson(project)) {
      return project.actions
    }
    if (project && isValidActions(project).isValid) {
      return project as Array<IAction>;
    }
    return []
  }