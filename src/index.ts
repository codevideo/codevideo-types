// constants
export { AllActionStrings } from './constants/AllActionStrings';

// top-level / essential interfaces
export { ICourse } from './interfaces/toplevel/ICourse';
export { ILesson } from './interfaces/toplevel/ILesson';
export { IAction } from './interfaces/IAction';

// snapshot interfaces
export { ICourseSnapshot } from './interfaces/toplevel/ICourseSnapshot';
export { IMouseSnapshot } from './interfaces/toplevel/IMouseSnapshot';
export { IEditorSnapshot } from './interfaces/toplevel/IEditorSnapshot';
export { IAuthorSnapshot } from './interfaces/toplevel/IAuthorSnapshot';

// utility interfaces
export { IAudioFile } from './interfaces/IAudioFile';
export { IPoint } from './interfaces/IPoint';
export { IEditorPosition } from './interfaces/IEditorPosition';
export { ISpeechCaption } from './interfaces/ISpeechCaption';
export { IFileStructure } from './interfaces/IFileStructure';
export { FileItem } from './interfaces/IFileStructure';
export { FileLeaf } from './interfaces/IFileStructure';
export { DirectoryNode } from './interfaces/IFileStructure';

// Action subtype type guards
export { isEditorAction} from './type-guards/isEditorAction';
export { isTerminalAction } from './type-guards/isTerminalAction';
export { isRepeatableAction } from './type-guards/isRepeatableAction';
export { isAuthorAction } from './type-guards/isAuthorAction';
export { isFileExplorerAction } from './type-guards/isFileExplorerAction';
export { isMouseAction } from './type-guards/isMouseAction';

// Other type guards
export { isFile } from './type-guards/isFile';
export { isDirectory } from './type-guards/isDirectory';
export { filterEditorActions } from './type-guards/filterEditorActions';
export { filterAuthorActions } from './type-guards/filterSpeakActions';

// Types
export { AllActions } from './types/actions/AllActions';
export { ActionEnvironment } from './types/ActionEnvironment';
export { EditorAction } from './types/EditorAction';
export { TerminalAction } from './types/TerminalAction';
export { FileExplorerAction } from './types/FileExplorerAction';
export { MouseActions } from './types/actions/MouseActions';
export { MouseAction } from './types/MouseAction';
export { ProgrammingLanguages } from './types/ProgrammingLanguages';
export { EditorActions } from './types/actions/EditorActions';
export { FileExplorerActions } from './types/actions/FileExplorerActions';
export { AuthorAction } from './types/AuthorAction';
export { TextToSpeechOptions } from './types/TextToSpeechOptions';
export { RepeatableActionNames } from './types/RepeatableActionNames';
export { GUIMode } from './types/GUIMode';