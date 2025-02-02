import { IAction } from "../interfaces/IAction";
import { EditorAction } from "../types/EditorAction";

export const isEditorAction = (action: IAction): action is EditorAction => {
    return (action.name as string) in {
        'editor-type': true,
        'editor-save': true,
        'editor-arrow-up': true,
        'editor-arrow-down': true,
        'editor-arrow-left': true,
        'editor-arrow-right': true,
        'editor-enter': true,
        'editor-tab': true,
        'editor-shift+arrow-right': true,
        'editor-shift+arrow-left': true,
        'editor-cmd+d': true,
        'editor-backspace': true,
        'editor-space': true,
        'editor-highlight-code': true,
        'editor-delete-line': true,
        'editor-command-left': true,
        'editor-command-right': true,
        'editor-command-d': true,
        'editor-command-c': true,
        'editor-command-v': true,
        'editor-shift-down-arrow': true,
        'editor-shift-up-arrow': true,
        'editor-scroll-up': true,
        'editor-scroll-down': true,
    };
}