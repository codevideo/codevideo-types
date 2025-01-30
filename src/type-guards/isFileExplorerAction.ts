import { IAction } from "../interfaces/IAction";
import { FileExplorerAction } from "../types/FileExplorerAction";

export const isFileExplorerAction = (action: IAction): action is FileExplorerAction => {
    return (action.name as string) in {
        'create-file': true,
        'open-file': true,
        'close-file': true,
        'rename-file': true,
        'delete-file': true,
        'move-file': true,
        'copy-file': true,
        'create-folder': true,
        'rename-folder': true,
        'delete-folder': true,
        'toggle-folder': true,
        'move-folder': true,
        'copy-folder': true,
    };
}





