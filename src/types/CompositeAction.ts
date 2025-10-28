import { IAction } from '../interfaces/IAction';
import { CompositeActions } from './actions/CompositeActions';

export type CompositeAction = IAction & {
    name: CompositeActions;
};