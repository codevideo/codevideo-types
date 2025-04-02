import { IAction } from "../IAction";
import { IAudioItem } from "./IAudioItem";

// The main data carrier for all things done with CodeVideo video exports.
export interface ICodeVideoManifest {
  environment: string;
  userId: string;
  uuid: string;
  actions: Array<IAction>;
  audioItems: Array<IAudioItem>;
  error?: string;
}