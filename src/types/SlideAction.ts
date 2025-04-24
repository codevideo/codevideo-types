import { IAction } from '../interfaces/IAction';
import { SlideActions } from './actions/SlideActions';

export type SlideAction = IAction & {
    name: SlideActions;
};