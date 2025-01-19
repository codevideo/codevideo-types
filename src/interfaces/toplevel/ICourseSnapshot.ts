import { IPoint } from "../IPoint";
import { FileItem, IFileStructure } from "../IFileStructure";
import { IEditorSnapshot } from "./IEditorSnapshot";
import { IMouseSnapshot } from "./IMouseSnapshot";
import { IAuthorSnapshot } from "./IAuthorSnapshot";

// represents a distinct moment in time during a lesson in a software course
// including the entire IDE state, the mouse state, and the author's speech caption (if any)
// theoretically an array of these structures could be used to rewind and fast forward through an entire lesson
// for this interface, the question we should always answer is: 
// "do i have everything i need to recreate the entire state of the project at this exact moment in time?"
export interface ICourseSnapshot {
    editorSnapshot: IEditorSnapshot;
    mouseSnapshot: IMouseSnapshot;
    authorSnapshot: IAuthorSnapshot;
}


