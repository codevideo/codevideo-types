import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";
import { MouseActions } from "./MouseActions";
import { MiscellaneousActions } from "./MiscellaneousActions";

export type AllActions = SimpleKeyboardActions | ComplexKeyboardActions | ClickActions | SpeakActions | MouseActions | MiscellaneousActions;
