import { IAction } from "../interfaces/IAction";
import { SpeakAction } from "../types/SpeakAction";

export const isSpeakAction = (action: IAction): action is SpeakAction => {
    return (action.name as string) in {
        'speak-before': true,
        'speak-after': true,
        'speak-during': true,
    };
}





