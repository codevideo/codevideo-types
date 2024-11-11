import { IFileSource, parseProject } from "@fullstackcraftllc/codevideo-dynamic-ast";
import { ILesson } from "../interfaces/toplevel/ILesson";
import { IFileStructure } from "../interfaces/project/IFileStructure";

export const validateProjectAtEndOfLesson = async (lesson: ILesson) => {
    const finalProjectSnapshotForLesson = lesson.finalProjectSnapshot;

    // from the project snapshot's file structure, get the list of files of type
    const fileSources = getFileSourcesFromProjectStructure(finalProjectSnapshotForLesson.fileStructure);

    // use codevideo-dynamic-ast to validate that all the files in the project snapshot are valid
    const parseResult = await parseProject(fileSources); 
    
    for (const project of parseResult.projects) {
        if (project.errors.length > 0) {
            throw new Error(`Project at end of lesson ${lesson.id} is invalid: ${project.errors.join("\n")}`);
        }
    }
}

const getFileSourcesFromProjectStructure = (fileStructure: IFileStructure): Array<IFileSource> => {
    // for each file in the file structure, create an IFileSource
    const fileSources: Array<IFileSource> = [];
    for (const filePath in fileStructure) {
        fileSources.push({
            path: filePath,
            content: fileStructure[filePath].content,
        });
    }
    return fileSources;
}