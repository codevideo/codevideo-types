import { IAction } from "../interfaces/IAction";

// useful for determining if the 'value' is a number or not
// typing and speaking actions are not repeatable
export const isRepeatableAction = (action: IAction) => {
  return action.name !== "editor-type" && 
  action.name !== "terminal-type" && 
  action.name !== "author-speak-after" && 
  action.name !== "author-speak-before" &&
  action.name !== "author-speak-during";
}