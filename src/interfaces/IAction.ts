import { ClickActions } from "../types/ClickActions";
import { ComplexKeyboardActions } from "../types/ComplexKeyboardActions";
import { SimpleKeyboardActions } from "../types/SimpleKeyboardActions";
import { SpeakActions } from "../types/SpeakActions";

export interface IAction {
    name: SimpleKeyboardActions | ClickActions | SpeakActions | ComplexKeyboardActions;
    value: string;
}

