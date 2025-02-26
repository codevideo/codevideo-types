import { IAction } from "../interfaces/IAction";
import { TerminalAction } from "../types/TerminalAction";
import { isTerminalAction } from "./isTerminalAction";

export const filterTerminalActions = (actions: Array<IAction>): Array<TerminalAction> => {
    return actions.filter(isTerminalAction);
}