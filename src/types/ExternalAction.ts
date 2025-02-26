import { IAction } from '../interfaces/IAction';
import { ExternalActions } from './actions/ExternalActions';

export type ExternalAction = IAction & {
    name: ExternalActions;
};