import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";
import { MouseActions } from "./MouseActions";
import { MiscellaneousActions } from "./MiscellaneousActions";
import { KeyboardAction } from "../KeyboardAction";
import { FileActions } from "./FileActions";
import { TerminalActions } from "./TerminalActions";

export type AllActions =
  | ClickActions
  | KeyboardAction
  | ComplexKeyboardActions
  | FileActions
  | MiscellaneousActions
  | MouseActions
  | SimpleKeyboardActions
  | SpeakActions
  | TerminalActions;
