import { IAction } from "../interfaces/IAction";
import { FileExplorerAction } from "../types/FileExplorerAction";
import { isFileExplorerAction } from "./isFileExplorerAction";

export const filterFileExplorerActions = (actions: Array<IAction>): Array<FileExplorerAction> => {
    return actions.filter(isFileExplorerAction);
}