import { isCourse } from '../src/type-guards/isCourse';
import { IAction } from '../src/interfaces/IAction';
import { ILesson } from '../src/interfaces/toplevel/ILesson';
import { ICourse } from '../src/interfaces/toplevel/ICourse';

describe('isCourse type guard', () => {
    
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

    const validCourse: ICourse = {
        id: 'course-1',
        name: 'Test Course',
        description: 'A test course',
        primaryLanguage: 'typescript',
        lessons: [validLesson]
    };

    describe('valid courses', () => {
        it('should return true for a valid course', () => {
            expect(isCourse(validCourse)).toBe(true);
        });

        it('should return true for a course with empty lessons array', () => {
            const courseWithEmptyLessons = {
                id: 'course-2',
                name: 'Empty Course',
                description: 'A course with no lessons',
                primaryLanguage: 'javascript',
                lessons: []
            };
            expect(isCourse(courseWithEmptyLessons as any)).toBe(true);
        });

        it('should return true for a course with multiple valid lessons', () => {
            const courseWithMultipleLessons = {
                id: 'course-3',
                name: 'Multi Lesson Course',
                description: 'A course with multiple lessons',
                primaryLanguage: 'python',
                lessons: [
                    {
                        id: 'lesson-1',
                        name: 'First Lesson',
                        description: 'The first lesson',
                        actions: [{ name: 'editor-type', value: 'first lesson' } as IAction]
                    },
                    {
                        id: 'lesson-2',
                        name: 'Second Lesson',
                        description: 'The second lesson',
                        actions: [{ name: 'terminal-enter', value: '1' } as IAction]
                    }
                ]
            };
            expect(isCourse(courseWithMultipleLessons as any)).toBe(true);
        });

        it('should return true for courses with various primary languages', () => {
            const languages = ['typescript', 'javascript', 'python', 'java', 'csharp', 'go', 'rust'];
            
            languages.forEach(language => {
                const courseWithLanguage = {
                    id: `course-${language}`,
                    name: `${language} Course`,
                    description: `A course for ${language}`,
                    primaryLanguage: language,
                    lessons: [validLesson]
                };
                expect(isCourse(courseWithLanguage as any)).toBe(true);
            });
        });
    });

    describe('invalid courses - missing required properties', () => {
        it('should return false when id is missing', () => {
            const courseWithoutId = {
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithoutId as any)).toBe(false);
        });

        it('should return false when name is missing', () => {
            const courseWithoutName = {
                id: 'course-1',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithoutName as any)).toBe(false);
        });

        it('should return false when description is missing', () => {
            const courseWithoutDescription = {
                id: 'course-1',
                name: 'Test Course',
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithoutDescription as any)).toBe(false);
        });

        it('should return false when primaryLanguage is missing', () => {
            const courseWithoutPrimaryLanguage = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithoutPrimaryLanguage as any)).toBe(false);
        });

        it('should return false when lessons is missing', () => {
            const courseWithoutLessons = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript'
            };
            expect(isCourse(courseWithoutLessons as any)).toBe(false);
        });
    });

    describe('invalid courses - wrong property types', () => {
        it('should return false when id is not a string', () => {
            const courseWithNumberId = {
                id: 123,
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithNumberId as any)).toBe(false);
        });

        it('should return false when name is not a string', () => {
            const courseWithNullName = {
                id: 'course-1',
                name: null,
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithNullName as any)).toBe(false);
        });

        it('should return false when description is not a string', () => {
            const courseWithBooleanDescription = {
                id: 'course-1',
                name: 'Test Course',
                description: true,
                primaryLanguage: 'typescript',
                lessons: [validLesson]
            };
            expect(isCourse(courseWithBooleanDescription as any)).toBe(false);
        });

        it('should return false when primaryLanguage is not a string', () => {
            const courseWithNumberPrimaryLanguage = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 42,
                lessons: [validLesson]
            };
            expect(isCourse(courseWithNumberPrimaryLanguage as any)).toBe(false);
        });

        it('should return false when lessons is not an array', () => {
            const courseWithStringLessons = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: 'not an array'
            };
            expect(isCourse(courseWithStringLessons as any)).toBe(false);
        });

        it('should return false when lessons contains invalid lesson objects', () => {
            const courseWithInvalidLessons = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [
                    validLesson,
                    { id: 'lesson-2', name: 'Invalid Lesson' }, // missing description and actions
                    { name: 'lesson-3', description: 'Another invalid', actions: [] } // missing id
                ]
            };
            expect(isCourse(courseWithInvalidLessons as any)).toBe(false);
        });

        it('should return false when lessons contains non-lesson objects', () => {
            const courseWithNonLessonObjects = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: [
                    validLesson,
                    'not a lesson object',
                    123,
                    null
                ]
            };
            expect(isCourse(courseWithNonLessonObjects as any)).toBe(false);
        });
    });

    describe('invalid inputs', () => {
        it('should return false for null', () => {
            expect(isCourse(null as any)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(isCourse(undefined as any)).toBe(false);
        });

        it('should return false for arrays', () => {
            expect(isCourse([validLesson] as any)).toBe(false);
        });

        it('should return false for primitive types', () => {
            expect(isCourse('string' as any)).toBe(false);
            expect(isCourse(123 as any)).toBe(false);
            expect(isCourse(true as any)).toBe(false);
        });

        it('should return false for empty objects', () => {
            expect(isCourse({} as any)).toBe(false);
        });
    });

    describe('edge cases that the old implementation would incorrectly validate', () => {
        it('should return false for object with only lessons property (old implementation would pass)', () => {
            const objectWithOnlyLessons = {
                lessons: [validLesson]
            };
            expect(isCourse(objectWithOnlyLessons as any)).toBe(false);
        });

        it('should return false for object with lessons but wrong other types (old implementation would pass)', () => {
            const objectWithWrongTypes = {
                id: 123,
                name: [],
                description: {},
                primaryLanguage: null,
                lessons: [validLesson]
            };
            expect(isCourse(objectWithWrongTypes as any)).toBe(false);
        });

        it('should return false for object with non-array lessons (old implementation would pass)', () => {
            const objectWithNonArrayLessons = {
                id: 'course-1',
                name: 'Test Course',
                description: 'A test course',
                primaryLanguage: 'typescript',
                lessons: { some: 'object' }
            };
            expect(isCourse(objectWithNonArrayLessons as any)).toBe(false);
        });

        it('should return false for object with empty string properties (edge case)', () => {
            const objectWithEmptyStrings = {
                id: '',
                name: '',
                description: '',
                primaryLanguage: '',
                lessons: []
            };
            // This should actually pass since empty strings are still strings
            // but we might want to add additional validation for non-empty strings
            expect(isCourse(objectWithEmptyStrings as any)).toBe(true);
        });
    });

    describe('complex nested validation', () => {
        it('should properly validate deeply nested lesson structures', () => {
            const complexCourse = {
                id: 'complex-course',
                name: 'Complex TypeScript Course',
                description: 'A comprehensive course with multiple lessons',
                primaryLanguage: 'typescript',
                lessons: [
                    {
                        id: 'lesson-1',
                        name: 'Introduction',
                        description: 'Getting started with TypeScript',
                        actions: [
                            { name: 'author-speak-before', value: 'Welcome to TypeScript!' },
                            { name: 'terminal-open', value: '1' },
                            { name: 'terminal-type', value: 'npm init -y' }
                        ] as IAction[]
                    },
                    {
                        id: 'lesson-2',
                        name: 'Advanced Topics',
                        description: 'Deep dive into TypeScript features',
                        actions: [
                            { name: 'editor-type', value: 'interface MyInterface {}' },
                            { name: 'editor-save', value: '1' }
                        ] as IAction[]
                    }
                ]
            };
            expect(isCourse(complexCourse as any)).toBe(true);
        });

        it('should reject courses with lessons that have invalid actions', () => {
            const courseWithInvalidActions = {
                id: 'invalid-course',
                name: 'Invalid Course',
                description: 'A course with invalid lesson actions',
                primaryLanguage: 'typescript',
                lessons: [
                    {
                        id: 'lesson-1',
                        name: 'Bad Lesson',
                        description: 'A lesson with invalid actions',
                        actions: [
                            { name: 'valid-action', value: 'test' }, // This should fail validation
                            { name: 'editor-type' } // Missing value
                        ]
                    }
                ]
            };
            expect(isCourse(courseWithInvalidActions as any)).toBe(false);
        });
    });
});
