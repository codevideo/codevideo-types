import { IAction } from "../interfaces/IAction"
import { isRootFileOrFolder } from "../utils/isRootFileOrFolder";

/**
 * Generates actions for creating a folder with mouse in the file explorer.
 * Assumes that all folders in file explorer are open to the needed path if the file is not a root file.
 * 
 * @param folderName - The name of the folder to create.
 * @returns An array of actions to be performed.
 */
export const generateActionsForCreateFolderWithMouse = (folderName: string): Array<IAction> => {
    const isRootFolder = isRootFileOrFolder(folderName);

    // root workflow - just go to the file explore and create the folder in the root
    if (isRootFolder) {
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
                "name": "mouse-move-file-explorer-context-menu-new-folder",
                "value": "1",
            },
            {
                "name": "mouse-left-click",
                "value": "1",
            },
            {
                "name": "file-explorer-type-new-folder-input",
                "value": folderName,
            },
            {
                "name": "file-explorer-enter-new-folder-input",
                "value": "1",
            }
        ]
    }

    // non-root - need to move the mouse to the parent folder and create the folder there
    const parentFolder = folderName.split("/").slice(0, -1).join("/");
    const rootFolderName = folderName.split("/").slice(-1)[0];

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
            "name": "mouse-move-file-explorer-folder-context-menu-new-folder",
            "value": "1",
        },
        {
            "name": "mouse-left-click",
            "value": "1",
        },
        {
            "name": "file-explorer-type-new-folder-input",
            "value": rootFolderName,
        },
        {
            "name": "file-explorer-enter-new-folder-input",
            "value": "1",
        }
    ]
}