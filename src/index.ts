// constants
export { AllActionStrings } from './constants/AllActionStrings';
export { advancedCommandValueSeparator } from './constants/advancedCommandValueSeparator';
export { AdvancedValueActionNames } from './constants/AdvancedValueActionNames';

// top-level / essential interfaces
export { ICourse } from './interfaces/toplevel/ICourse';
export { ILesson } from './interfaces/toplevel/ILesson';
export { IAction } from './interfaces/IAction';

// snapshot interfaces
export { ICourseSnapshot } from './interfaces/toplevel/ICourseSnapshot';
export { IFileExplorerSnapshot } from './interfaces/toplevel/IFileExplorerSnapshot';
export { IEditorSnapshot } from './interfaces/toplevel/IEditorSnapshot';
export { ITerminalSnapshot } from './interfaces/toplevel/ITerminalSnapshot';
export { IMouseSnapshot } from './interfaces/toplevel/IMouseSnapshot';
export { IAuthorSnapshot } from './interfaces/toplevel/IAuthorSnapshot';

// log interfaces
export { IVirtualLayerLog } from './interfaces/logs/IVirtualLayerLog';

// utility interfaces
export { IEditor } from './interfaces/IEditor';
export { ITerminal } from './interfaces/ITerminal';
export { IAudioFile } from './interfaces/IAudioFile';
export { IPoint } from './interfaces/IPoint';
export { IEditorPosition } from './interfaces/IEditorPosition';
export { ISpeechCaption } from './interfaces/ISpeechCaption';
export { IFileStructure } from './interfaces/IFileStructure';
export { FileItem } from './interfaces/IFileStructure';
export { FileLeaf } from './interfaces/IFileStructure';
export { DirectoryNode } from './interfaces/IFileStructure';
export { IFileEntry } from './interfaces/IFileEntry';

// video related interfaces
export { IAudioItem } from './interfaces/video/IAudioItem';
export { ICodeVideoManifest } from './interfaces/video/ICodeVideoManifest';

// user related interfaces
export { ICodeVideoUserMetadata } from './interfaces/users/ICodeVideoUserMetadata';

// api related interfaces
export { IGenerateVideoFromActionsOptions } from './interfaces/api/v1/IGenerateVideoFromActionsOptions';

// dynamic-ast related interfaces
export { IProjectError } from './interfaces/dynamic-ast/IProjectError';
export { IFileSource } from './interfaces/dynamic-ast/IFileSource';

// project and action type guards
export { isLesson } from './type-guards/isLesson';
export { isCourse } from './type-guards/isCourse';

// validators
export { isValidAction } from './validators/isValidAction';
export { isValidActions } from './validators/isValidActions';

// extractors
export { extractActionsFromProject } from './extractors/extractActionsFromProject';

// Action subtype type guards
export { isEditorAction} from './type-guards/isEditorAction';
export { isTerminalAction } from './type-guards/isTerminalAction';
export { isRepeatableAction } from './type-guards/isRepeatableAction';
export { isAuthorAction } from './type-guards/isAuthorAction';
export { isFileExplorerAction } from './type-guards/isFileExplorerAction';
export { isMouseAction } from './type-guards/isMouseAction';
export { isExternalAction } from './type-guards/isExternalAction';

// Other type guards
export { isFile } from './type-guards/isFile';
export { isDirectory } from './type-guards/isDirectory';
export { isAdvancedValueAction } from './type-guards/isAdvancedValueAction';

// "type-guard as filter"s
export { filterAuthorActions } from './type-guards/filterSpeakActions';
export { filterFileExplorerActions } from './type-guards/filterFileExplorerActions';
export { filterEditorActions } from './type-guards/filterEditorActions';
export { filterTerminalActions } from './type-guards/filterTerminalActions';
export { filterMouseActions } from './type-guards/filterMouseActions';
export { filterExternalActions } from './type-guards/filterExternalActions';


// Types

// Top-level types
export { ProjectType } from './types/toplevel/ProjectType';
export { Project } from './types/toplevel/Project';

// Log types
export { LogType } from './types/logs/LogType';
export { VirtualLayerLogSource } from './types/logs/VirtualLayerLogSource';

// Other types
export { AllActions } from './types/actions/AllActions';
export { ActionEnvironment } from './types/ActionEnvironment';
export { EditorAction } from './types/EditorAction';
export { TerminalAction } from './types/TerminalAction';
export { FileExplorerAction } from './types/FileExplorerAction';
export { MouseActions } from './types/actions/MouseActions';
export { MouseAction } from './types/MouseAction';
export { ExternalAction } from './types/ExternalAction';
export { ExternalActions } from './types/actions/ExternalActions';
export { ProgrammingLanguages } from './types/ProgrammingLanguages';
export { EditorActions } from './types/actions/EditorActions';
export { FileExplorerActions } from './types/actions/FileExplorerActions';
export { AuthorAction } from './types/AuthorAction';
export { AdvancedValueActions } from './types/actions/AdvancedValueActions';
export { AdvancedValueAction } from './types/AdvancedValueAction';
export { TextToSpeechOptions } from './types/TextToSpeechOptions';
export { RepeatableActionNames } from './types/RepeatableActionNames';
export { GUIMode } from './types/GUIMode';
export { ExportType } from './types/ExportType';
export { MouseLocation } from './types/MouseLocation'

// converters
export { convertProjectType } from './converters/convertProjectType';

// utils
export { getRootFileName } from './utils/getRootFileName';