import { IAction } from "../interfaces/IAction";
import { TerminalAction } from "../types/TerminalAction";

export const isTerminalAction = (action: IAction): action is TerminalAction => {
    // if the action starts with 'terminal-', it is a terminal action
    return action.name.startsWith('terminal-'); 
}