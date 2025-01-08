import { ClickActions } from "./ClickActions";
import { ComplexKeyboardActions } from "./ComplexKeyboardActions";
import { SimpleKeyboardActions } from "./SimpleKeyboardActions";
import { SpeakActions } from "./SpeakActions";
import { MouseActions } from "./MouseActions";
import { MiscellaneousActions } from "./MiscellaneousActions";
import { FileExplorerActions } from "./FileExplorerActions";
import { TerminalActions } from "./TerminalActions";

export type AllActions =
  | ClickActions
  | SimpleKeyboardActions 
  | ComplexKeyboardActions
  | FileExplorerActions
  | MiscellaneousActions
  | MouseActions
  | SpeakActions
  | TerminalActions;
