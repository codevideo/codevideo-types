import { IAction } from "../IAction";
import { IFileStructure } from "./IFileStructure";

// represents a distinct moment in time during a lesson in a software course
// including the project file structure, the current open file, and the current terminal content
// theoretically an array of these structures could be used to rewind and fast forward through a lesson
export interface IProjectSnapshot {
    id: string;
    name: string;
    description: string;
    language: string;
    fileStructure: IFileStructure;
    currentOpenFile: string;
    currentTerminalContent: string;
    // TODO: depending how granular we want to get, could add things like:
    // - current cursor position
    // - current selected text
    // - current left or right click
    // - current breakpoints
    // - current key presses
}

