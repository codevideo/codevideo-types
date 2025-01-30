import { IAction } from '../interfaces/IAction';
import { EditorActions } from './actions/EditorActions';

export type EditorAction = IAction & {
    name: EditorActions;
};