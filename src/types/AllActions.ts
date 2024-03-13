import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";

export type AllActions = SimpleKeyboardActions | ComplexKeyboardActions | ClickActions | SpeakActions;
