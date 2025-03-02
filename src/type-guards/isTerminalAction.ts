import { IAction } from "../interfaces/IAction";
import { TerminalAction } from "../types/TerminalAction";

export const isTerminalAction = (action: IAction): action is TerminalAction => {
    return (action.name as string) in {
        'terminal-type': true,
        'terminal-arrow-up': true,
        'terminal-arrow-down': true,
        'terminal-arrow-left': true,
        'terminal-arrow-right': true,
        'terminal-enter': true,
        'terminal-tab': true,
        'terminal-shift+arrow-right': true,
        'terminal-shift+arrow-left': true,
        'terminal-backspace': true,
        'terminal-space': true,
        'terminal-command-left': true,
        'terminal-command-right': true,
        'terminal-command-c': true,
        'terminal-command-v': true,
        'terminal-set-output': true,
        'terminal-set-prompt': true,
        'terminal-set-present-working-directory': true,
    };
}