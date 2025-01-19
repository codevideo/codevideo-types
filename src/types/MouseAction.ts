import { IAction } from '../interfaces/IAction';
import { MouseActions } from './actions/MouseActions';

export type MouseAction = IAction & {
    name: MouseActions;
};