import { IAction } from "../interfaces/IAction";
import { KeyboardAction } from "../types/KeyboardAction";

export const isKeyboardAction = (action: IAction): action is KeyboardAction => {
    return (action.name as string) in {
        'type-editor': true,
        'save-editor': true,
        'type-terminal': true,
        'arrow-up': true,
        'arrow-down': true,
        'arrow-left': true,
        'arrow-right': true,
        'enter': true,
        'tab': true,
        'shift+arrow-right': true,
        'shift+arrow-left': true,
        'cmd+d': true,
        'backspace': true,
        'space': true,
        'highlight-code': true,
        'delete-line': true,
        'command-left': true,
        'command-right': true,
        'command-d': true,
        'command-c': true,
        'command-v': true,
        'shift-down-arrow': true,
        'shift-up-arrow': true,
    };
}