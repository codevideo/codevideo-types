import { IAction } from "../interfaces/IAction"
import { getRootFileName } from "../utils/getRootFileName";
import { isRootFileOrFolder } from "../utils/isRootFileOrFolder";

/**
 * Generates actions for creating a file with mouse in the file explorer.
 * Assumes that all folders in file explorer are open to the needed path if the file is not a root file.
 * 
 * @param fileName - The name of the file to create.
 * @returns An array of actions to be performed.
 */
export const generateActionsForCreateFileWithMouse = (fileName: string): Array<IAction> => {
    const isRootFile = isRootFileOrFolder(fileName);
    const rootFileName = getRootFileName(fileName);

    // root workflow - just right click in the file explorer and create the file
    if (isRootFile) {
        return [
            {
                "name": "mouse-move-file-explorer",
                "value": "1",
            },
            {
                "name": "mouse-right-click",
                "value": "1",
            },
            {
                "name": "mouse-move-file-explorer-context-menu-new-file",
                "value": "1",
            },
            {
                "name": "mouse-left-click",
                "value": "1",
            },
            {
                "name": "file-explorer-type-new-file-input",
                "value": rootFileName,
            },
            {
                "name": "file-explorer-enter-new-file-input",
                "value": "1",
            }
        ]
    }

    // non-root - need to move the mouse to the parent folder and create the file there
    const parentFolder = fileName.split("/").slice(0, -1).join("/");

    return [
        {
            "name": "mouse-move-file-explorer-folder",
            "value": parentFolder,
        },
        {
            "name": "mouse-right-click",
            "value": "1",
        },
        {
            "name": "mouse-move-file-explorer-folder-context-menu-new-file",
            "value": "1",
        },
        {
            "name": "mouse-left-click",
            "value": "1",
        },
        {
            "name": "file-explorer-type-new-file-input",
            "value": rootFileName,
        },
        {
            "name": "file-explorer-enter-new-file-input",
            "value": "1",
        }
    ]
}