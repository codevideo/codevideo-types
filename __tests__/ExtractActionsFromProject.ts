import { extractActionsFromProject } from '../src/extractors/extractActionsFromProject';
import { IAction } from '../src/interfaces/IAction';
import { ILesson } from '../src/interfaces/toplevel/ILesson';
import { ICourse } from '../src/interfaces/toplevel/ICourse';
import { Project } from '../src/types/toplevel/Project';

describe('extractActionsFromProject', () => {
    
    // Test data
    const mockAction: IAction = {
        name: 'editor-type',
        value: 'test'
    };

    const mockLesson: ILesson = {
        id: 'lesson1',
        name: 'Test Lesson',
        description: 'Test Description',
        actions: [mockAction]
    };

    const mockCourse: ICourse = {
        id: 'course1',
        name: 'Test Course',
        description: 'Test Course Description',
        primaryLanguage: 'typescript',
        lessons: [mockLesson]
    };

    const mockActions: IAction[] = [mockAction];

    it('should extract actions from a Course', () => {
        const result = extractActionsFromProject(mockCourse, 0);
        expect(result).toEqual([mockAction]);
    });

    it('should extract actions from a Lesson', () => {
        const result = extractActionsFromProject(mockLesson, null);
        expect(result).toEqual([mockAction]);
    });

    it('should extract actions from an Actions array', () => {
        const result = extractActionsFromProject(mockActions, null);
        expect(result).toEqual(mockActions);
    });

    it('should return an empty array for invalid project type', () => {
        const invalidProject = {};
        const result = extractActionsFromProject(invalidProject as Project, null);
        expect(result).toEqual([]);
    });
});
