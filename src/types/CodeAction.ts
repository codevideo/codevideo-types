import { IAction } from '../interfaces/IAction';
import { ComplexKeyboardActions } from './actions/ComplexKeyboardActions';
import { SimpleKeyboardActions } from './actions/SimpleKeyboardActions';

export type CodeAction = IAction & {
    name: SimpleKeyboardActions | ComplexKeyboardActions;
};