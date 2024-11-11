import { IAction } from '../interfaces/IAction';
import { TerminalActions } from './actions/TerminalActions';

export type TerminalAction = IAction & {
    name: TerminalActions;
};