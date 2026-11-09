import { advancedCommandValueSeparator } from "../constants/advancedCommandValueSeparator";
import { AdvancedValueActionNames } from "../constants/AdvancedValueActionNames";
import { AllActionStrings } from "../constants/AllActionStrings";
import { IAction } from "../interfaces/IAction";
import { isRepeatableAction } from "../type-guards/isRepeatableAction";
import { parseDiagnosticLocation } from "../diagnostics/diagnosticActions";

// validates if the given object is an IAction
export const isValidAction = (object: any): object is IAction => {
    // if name is not included in AllActionStrings, return false
    if (object && object.name && !AllActionStrings.includes(object.name)) {
        return false;
    }

    // advanced value actions must have a value that includes the separator
    if (object && AdvancedValueActionNames.includes(object.name) && !object.value.includes(advancedCommandValueSeparator)) {
        return false;
    }

    // the diagnostic hover needs a 'path:line:column' location
    if (object && object.name === 'mouse-move-editor-diagnostic' && !parseDiagnosticLocation(object.value)) {
        return false;
    }

    // clipboard text breaks lines with \n alone: the VirtualEditor would keep a
    // \r that the renderer's Monaco drops
    if (object && object.name === 'clipboard-set-text' && typeof object.value === 'string' && object.value.includes('\r')) {
        return false;
    }

    // if the action is a repeatable action, check if the value is a number
    if (object.name && isRepeatableAction(object.name) && object.value && object.value !== "" && !isNaN(object.value)) {
        return object;
    }

    // any other action needs both a valid name and a non-empty value
    if (object && object.name && object.value && object.value !== "") {
        return object;
    }

    // if here (somehow) then the action is invalid
    return false;
}