import { IAction } from '../interfaces/IAction';
import { ComplexKeyboardActions } from './ComplexKeyboardActions';
import { SimpleKeyboardActions } from './SimpleKeyboardActions';

export type CodeAction = IAction & {
    name: SimpleKeyboardActions | ComplexKeyboardActions;
};