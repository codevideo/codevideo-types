import { IAction } from '../interfaces/IAction';
import { SpeakActions } from './actions/SpeakActions';

export type SpeakAction = IAction & {
    name: SpeakActions;
};