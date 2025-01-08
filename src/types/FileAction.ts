import { IAction } from '../interfaces/IAction';
import { FileActions } from './actions/FileActions';

export type FileAction = IAction & {
    name: FileActions;
};