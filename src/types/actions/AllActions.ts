import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";
import { MouseActions } from "./MouseActions";
import { MiscellaneousActions } from "./MiscellaneousActions";
import { CodeAction } from "../CodeAction";
import { FileActions } from "./FileActions";

export type AllActions =
  | ClickActions
  | CodeAction
  | ComplexKeyboardActions
  | FileActions
  | MiscellaneousActions
  | MouseActions
  | SimpleKeyboardActions
  | SpeakActions;
