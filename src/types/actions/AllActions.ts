import { AuthorActions } from "./AuthorActions";
import { MouseActions } from "./MouseActions";
import { FileExplorerActions } from "./FileExplorerActions";
import { TerminalActions } from "./TerminalActions";
import { EditorActions } from "./EditorActions";

// all actions combines the 5 domains of the CodeVideo world
export type AllActions =
  | AuthorActions
  | FileExplorerActions
  | EditorActions
  | MouseActions
  | TerminalActions
  | AuthorActions;
