import { IAction } from "../interfaces/IAction";
import { AuthorAction } from "../types/AuthorAction";
import { MouseAction } from "../types/MouseAction";

export const isMouseAction = (action: IAction): action is MouseAction => {
    return (action.name as string) in {
        "mouse-move": true,
        "mouse-click": true,
        "mouse-double-click": true,
        "mouse-triple-click": true,
        "mouse-click-filename": true,
        "mouse-click-terminal": true,
        "mouse-click-editor": true,
    };
}





