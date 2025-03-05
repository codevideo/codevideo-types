import { IAction } from "../interfaces/IAction";

// useful for determining if the 'value' is a number or not
// typing, speaking, and file-explorer actions are not repeatable
export const isRepeatableAction = (action: IAction) => {
  return !action.name.includes('type') && 
  !action.name.includes('speak') && 
  !action.name.includes('file-explorer');
}