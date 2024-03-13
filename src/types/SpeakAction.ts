import { IAction } from "../interfaces/IAction";
import { SpeakActions } from "./SpeakActions";

export type SpeakAction = IAction & {
    name: SpeakActions;
};