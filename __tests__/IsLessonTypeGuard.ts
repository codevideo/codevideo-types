import { isLesson } from '../src/type-guards/isLesson';
import { IAction } from '../src/interfaces/IAction';
import { ILesson } from '../src/interfaces/toplevel/ILesson';

describe('isLesson type guard', () => {
    
    const validAction: IAction = {
        name: 'editor-type',
        value: 'test content'
    };

    const validLesson: ILesson = {
        id: 'lesson-1',
        name: 'Test Lesson',
        description: 'A test lesson',
        actions: [validAction]
    };

    describe('valid lessons', () => {
        it('should return true for a valid lesson', () => {
            expect(isLesson(validLesson)).toBe(true);
        });

        it('should return true for a lesson with empty actions array', () => {
            const lessonWithEmptyActions = {
                id: 'lesson-2',
                name: 'Empty Lesson',
                description: 'A lesson with no actions',
                actions: []
            };
            expect(isLesson(lessonWithEmptyActions as any)).toBe(true);
        });

        it('should return true for a lesson with optional snapshots', () => {
            const lessonWithSnapshots = {
                ...validLesson,
                initialSnapshot: { 
                    isUnsavedChangesDialogOpen: false,
                    unsavedFileName: "",
                    fileExplorerSnapshot: {} as any,
                    editorSnapshot: {} as any,
                    terminalSnapshot: {} as any,
                    mouseSnapshot: {} as any,
                    authorSnapshot: {} as any
                },
                finalSnapshot: { 
                    isUnsavedChangesDialogOpen: false,
                    unsavedFileName: "",
                    fileExplorerSnapshot: {} as any,
                    editorSnapshot: {} as any,
                    terminalSnapshot: {} as any,
                    mouseSnapshot: {} as any,
                    authorSnapshot: {} as any
                }
            };
            expect(isLesson(lessonWithSnapshots)).toBe(true);
        });

        it('should return true for a lesson with multiple valid actions', () => {
            const lessonWithMultipleActions = {
                id: 'lesson-3',
                name: 'Multi Action Lesson',
                description: 'A lesson with multiple actions',
                actions: [
                    { name: 'editor-type', value: 'first action' } as IAction,
                    { name: 'terminal-enter', value: '1' } as IAction,
                    { name: 'author-speak-before', value: 'Hello world' } as IAction
                ]
            };
            expect(isLesson(lessonWithMultipleActions as any)).toBe(true);
        });
    });

    describe('invalid lessons - missing required properties', () => {
        it('should return false when id is missing', () => {
            const lessonWithoutId = {
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutId as any)).toBe(false);
        });

        it('should return false when name is missing', () => {
            const lessonWithoutName = {
                id: 'lesson-1',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutName as any)).toBe(false);
        });

        it('should return false when description is missing', () => {
            const lessonWithoutDescription = {
                id: 'lesson-1',
                name: 'Test Lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithoutDescription as any)).toBe(false);
        });

        it('should return false when actions is missing', () => {
            const lessonWithoutActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson'
            };
            expect(isLesson(lessonWithoutActions as any)).toBe(false);
        });
    });

    describe('invalid lessons - wrong property types', () => {
        it('should return false when id is not a string', () => {
            const lessonWithNumberId = {
                id: 123,
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithNumberId as any)).toBe(false);
        });

        it('should return false when name is not a string', () => {
            const lessonWithNullName = {
                id: 'lesson-1',
                name: null,
                description: 'A test lesson',
                actions: [validAction]
            };
            expect(isLesson(lessonWithNullName as any)).toBe(false);
        });

        it('should return false when description is not a string', () => {
            const lessonWithBooleanDescription = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: true,
                actions: [validAction]
            };
            expect(isLesson(lessonWithBooleanDescription as any)).toBe(false);
        });

        it('should return false when actions is not an array', () => {
            const lessonWithStringActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: 'not an array'
            };
            expect(isLesson(lessonWithStringActions as any)).toBe(false);
        });

        it('should return false when actions contains invalid action objects', () => {
            const lessonWithInvalidActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: [
                    validAction,
                    { name: 'invalid-action-name', value: 'test' }, // invalid action name
                    { name: 'editor-type' } // missing value
                ]
            };
            expect(isLesson(lessonWithInvalidActions as any)).toBe(false);
        });

        it('should return false when optional snapshots are null', () => {
            const lessonWithNullSnapshots = {
                ...validLesson,
                initialSnapshot: null,
                finalSnapshot: null
            };
            expect(isLesson(lessonWithNullSnapshots as any)).toBe(false);
        });
    });

    describe('invalid inputs', () => {
        it('should return false for null', () => {
            expect(isLesson(null as any)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(isLesson(undefined as any)).toBe(false);
        });

        it('should return false for arrays', () => {
            expect(isLesson([validAction] as any)).toBe(false);
        });

        it('should return false for primitive types', () => {
            expect(isLesson('string' as any)).toBe(false);
            expect(isLesson(123 as any)).toBe(false);
            expect(isLesson(true as any)).toBe(false);
        });

        it('should return false for empty objects', () => {
            expect(isLesson({} as any)).toBe(false);
        });
    });

    describe('edge cases that the old implementation would incorrectly validate', () => {
        it('should return false for object with only actions property (old implementation would pass)', () => {
            const objectWithOnlyActions = {
                actions: [validAction]
            };
            expect(isLesson(objectWithOnlyActions as any)).toBe(false);
        });

        it('should return false for object with actions but wrong other types (old implementation would pass)', () => {
            const objectWithWrongTypes = {
                id: 123,
                name: [],
                description: {},
                actions: [validAction]
            };
            expect(isLesson(objectWithWrongTypes as any)).toBe(false);
        });

        it('should return false for object with non-array actions (old implementation would pass)', () => {
            const objectWithNonArrayActions = {
                id: 'lesson-1',
                name: 'Test Lesson',
                description: 'A test lesson',
                actions: { some: 'object' }
            };
            expect(isLesson(objectWithNonArrayActions as any)).toBe(false);
        });
    });
});
