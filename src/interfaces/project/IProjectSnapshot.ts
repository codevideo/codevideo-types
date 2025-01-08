import { FileItem, IFileStructure } from "./IFileStructure";
import { IProjectMetadata } from "./IProjectMetadata";

// represents a distinct moment in time during a lesson in a software course
// including the project file structure, the current open file, and the current terminal content
// theoretically an array of these structures could be used to rewind and fast forward through a lesson
// for this interface, the question we should always answer is: "do i have everything i need to recreate the entire state of the project at this exact moment in time?"
export interface IProjectSnapshot {
    metadata: IProjectMetadata;
    fileStructure: IFileStructure;
    currentFile: FileItem;
    openFiles: Array<FileItem>;
    currentTerminalContents: string;
    terminalContents: Array<string>;
    cursorPosition: { x: number, y: number };
    currentSpeechCaption: string;
}



