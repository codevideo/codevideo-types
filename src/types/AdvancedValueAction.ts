import { IAction } from '../interfaces/IAction';
import { AdvancedValueActions } from './actions/AdvancedValueActions';

export type AdvancedValueAction = IAction & {
    name: AdvancedValueActions;
};