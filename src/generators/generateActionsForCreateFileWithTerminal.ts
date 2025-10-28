import { IAction } from "../interfaces/IAction"

export const generateActionsForCreateFileWithTerminal = (fileName: string): Array<IAction> => {
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
            "value": `touch ${fileName}`,
        },
        {
            "name": "terminal-enter",
            "value": "1",
        },
    ]
}