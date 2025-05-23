import { RepeatableActionNames } from "../constants/RepeatableActionNames";
import { IAction } from "../interfaces/IAction";

// useful for determining if the 'value' is a number or not
// see both RepeatableActionNames and AllActionStrings
export const isRepeatableAction = (action: IAction) => {
  return RepeatableActionNames.includes(action.name)
}