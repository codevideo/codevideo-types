import { ITerminal } from "../ITerminal";

// represents a multi tabbed terminal where the first open terminal is considered to be the "current" terminal
export interface ITerminalSnapshot {
    terminals: Array<ITerminal>;
}