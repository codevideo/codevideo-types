import { AllActionStrings } from "../constants/AllActionStrings";
import { IAction } from "../interfaces/IAction";

// validates if the given object is an IAction
export const isAction = (object: any): object is IAction => {
    // action needs both a valid name and value property
    return object && AllActionStrings.includes(object.name) && object.value;
}