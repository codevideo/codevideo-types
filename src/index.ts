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
export { ISpeechCaption } from './interfaces/ISpeechCaption';
export { IFileStructure } from './interfaces/IFileStructure';
export { FileItem } from './interfaces/IFileStructure';
export { FileLeaf } from './interfaces/IFileStructure';
export { DirectoryNode } from './interfaces/IFileStructure';

// Type guards
export { isKeyboardAction as isCodeAction } from './type-guards/isKeyboardAction';
export { isTerminalAction } from './type-guards/isTerminalAction';
export { isRepeatableAction } from './type-guards/isRepeatableAction';
export { isSpeakAction } from './type-guards/isSpeakAction';
export { isFileExplorerAction } from './type-guards/isFileExplorerAction';
export { isFile } from './type-guards/isFile';
export { isDirectory } from './type-guards/isDirectory';
export { filterKeyboardActions } from './type-guards/filterKeyboardActions';
export { filterSpeakActions } from './type-guards/filterSpeakActions';

// Types
export { AllActions } from './types/actions/AllActions';
export { ClickActions } from './types/actions/ClickActions';
export { ActionEnvironment } from './types/ActionEnvironment';
export { KeyboardAction } from './types/KeyboardAction';
export { TerminalAction } from './types/TerminalAction';
export { FileExplorerAction } from './types/FileExplorerAction';
export { MiscellaneousActions } from './types/actions/MiscellaneousActions';
export { MouseActions } from './types/actions/MouseActions';
export { MouseAction } from './types/MouseAction';
export { ProgrammingLanguages } from './types/ProgrammingLanguages';
export { ComplexKeyboardActions } from './types/actions/ComplexKeyboardActions';
export { FileExplorerActions } from './types/actions/FileExplorerActions';
export { SimpleKeyboardActions } from './types/actions/SimpleKeyboardActions';
export { SpeakAction } from './types/SpeakAction';
export { TextToSpeechOptions } from './types/TextToSpeechOptions';
export { RepeatableActionNames } from './types/RepeatableActionNames';
export { GUIMode } from './types/GUIMode';