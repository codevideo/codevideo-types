import { IAction } from "../interfaces/IAction";
import { FileExplorerAction } from "../types/FileExplorerAction";

export const isFileExplorerAction = (action: IAction): action is FileExplorerAction => {
    // if the action starts with 'file-explorer-', it is a file explorer action
    return action.name.startsWith('file-explorer-');
}





