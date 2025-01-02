import { IAction } from "../interfaces/IAction";

// useful for determining if the 'value' is a number or not
// typing and speaking actions are not repeatable
export const isRepeatableAction = (action: IAction) => {
  return action.name !== 'type-editor' && action.name !== 'type-terminal' && action.name !== 'speak-after' && action.name !== 'speak-before' && action.name !== 'speak-during';
}