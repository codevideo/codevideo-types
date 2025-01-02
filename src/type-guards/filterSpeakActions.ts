import { IAction } from "../interfaces/IAction";
import { SpeakAction } from "../types/SpeakAction";
import { isSpeakAction } from "./isSpeakAction";

// type guard to convert an array of IAction to an array of SpeakAction
export const filterSpeakActions = (actions: Array<IAction>): Array<SpeakAction> => {
    return actions.filter(isSpeakAction);
}