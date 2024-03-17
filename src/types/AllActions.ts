import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";
import { MouseActions } from "./MouseActions";

export type AllActions = SimpleKeyboardActions | ComplexKeyboardActions | ClickActions | SpeakActions | MouseActions;
