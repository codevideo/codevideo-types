import { ProgrammingLanguages } from "../../../types/ProgrammingLanguages";
import { TextToSpeechOptions } from "../../../types/TextToSpeechOptions";
import { IAction } from "../../IAction";

export interface IGenerateVideoFromActionsOptions {
  actions: Array<IAction>,
  language: ProgrammingLanguages,
  textToSpeechOption: TextToSpeechOptions,
  initialCode?: string,
  ttsApiKey?: string;
  ttsVoiceId?: string;
  guid?: string,
}