import { IAction } from "../interfaces/IAction";
import { FileExplorerAction } from "../types/FileExplorerAction";

export const isFileExplorerAction = (action: IAction): action is FileExplorerAction => {
    return (action.name as string) in {
        "file-explorer-create-file": true,
        "file-explorer-open-file": true,
        "file-explorer-close-file": true,
        "file-explorer-rename-file": true,
        "file-explorer-delete-file": true,
        "file-explorer-move-file": true,
        "file-explorer-copy-file": true,
        "file-explorer-create-folder": true,
        "file-explorer-rename-folder": true,
        "file-explorer-delete-folder": true,
        "file-explorer-toggle-folder": true,
        "file-explorer-move-folder": true,
        "file-explorer-copy-folder": true,
    };
}





