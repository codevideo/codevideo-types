import { IAction } from "../IAction";
import { IAudioItem } from "./IAudioItem";

export interface ICodeVideoManifest {
    userId: string;
    uuid: string;
    actions: Array<IAction>;
    audioItems: Array<IAudioItem>;
  }