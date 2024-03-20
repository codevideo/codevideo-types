import { IAction } from "../interfaces/IAction";

// useful for determining if the 'value' is a number or not
export const isRepeatableAction = (action: IAction) => {
  return action.name !== 'type-editor' && action.name !== 'type-terminal';
}