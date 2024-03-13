import { IAction } from "../interfaces/IAction";
import { CodeAction } from "../types/CodeAction";

export const isCodeAction = (action: IAction): action is CodeAction => {
    return (action.name as string) in {
        'type-editor': true,
        'type-terminal': true,
        'arrow-up': true,
        'arrow-down': true,
        'arrow-left': true,
        'arrow-right': true,
        'enter': true,
        'tab': true,
        'shift+arrow-right': true,
        'cmd+d': true,
        'backspace': true,
        'space': true,
        'highlight-code': true,
        'delete-line': true,
        'command-right': true,
    };
}