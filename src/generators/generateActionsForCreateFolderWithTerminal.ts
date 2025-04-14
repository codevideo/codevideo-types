import { IAction } from "../interfaces/IAction"

/**
 * Creates an array of actions to create a folder using mouse and terminal actions.
 * Assumes a terminal is already open and the foldername is absolute.
 * @param folderName - The name of the folder to be created
 * @returns 
 */
export const generateActionsForCreateFolderWithTerminal = (folderName: string): Array<IAction> => {
    return [
        {
            "name": "mouse-move-terminal",
            "value": "1",
        },
        {
            "name": "mouse-left-click",
            "value": "1",
        },
        {
            "name": "terminal-type",
            "value": `mkdir ${folderName}`,
        },
        {
            "name": "terminal-enter",
            "value": "1",
        },
    ]
}