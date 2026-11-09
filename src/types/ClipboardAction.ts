import { IAction } from '../interfaces/IAction';
import { ClipboardActions } from './actions/ClipboardActions';

export type ClipboardAction = IAction & {
    name: ClipboardActions;
};
