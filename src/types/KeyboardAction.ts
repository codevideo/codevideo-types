import { ComplexKeyboardActions } from './actions/ComplexKeyboardActions';
import { SimpleKeyboardActions } from './actions/SimpleKeyboardActions';

export type KeyboardAction = {
    name: SimpleKeyboardActions | ComplexKeyboardActions;
    value: string;
};