import { IAction } from '../interfaces/IAction';
import { FileExplorerActions } from './actions/FileExplorerActions';

export type FileExplorerAction = IAction & {
    name: FileExplorerActions;
};