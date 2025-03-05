import { AdvancedValueActionNames } from "../constants/AdvancedValueActionNames";
import { IAction } from "../interfaces/IAction";
import { AdvancedValueAction } from "../types/AdvancedValueAction";

export const isAdvancedValueAction = (action: IAction): action is AdvancedValueAction => {
    return AdvancedValueActionNames.includes(action.name)
}