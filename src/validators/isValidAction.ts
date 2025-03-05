import { advancedCommandValueSeparator } from "../constants/advancedCommandValueSeparator";
import { AdvancedValueActionNames } from "../constants/AdvancedValueActionNames";
import { AllActionStrings } from "../constants/AllActionStrings";
import { IAction } from "../interfaces/IAction";

// validates if the given object is an IAction
export const isValidAction = (object: any): object is IAction => {
    // advanced value actions must have a value that includes the separator
    if (object && AdvancedValueActionNames.includes(object.name) && !object.value.includes(advancedCommandValueSeparator)) {
        return false;
    }

    // action needs both a valid name and value property
    return object && AllActionStrings.includes(object.name) && object.value;
}