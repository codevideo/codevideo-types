import { IAction } from '../interfaces/IAction';
import { AuthorActions } from './actions/AuthorActions';

export type AuthorAction = IAction & {
    name: AuthorActions;
};