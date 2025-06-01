import { IAction } from "../IAction";
import { ICodeVideoIDEProps } from "../ICodeVideoIDEProps";
import { ILesson } from "../toplevel/ILesson";
import { IAudioItem } from "./IAudioItem";

// The main data carrier for all things done with CodeVideo video exports.
export interface ICodeVideoManifest {
  environment: string;
  userId: string;
  uuid: string;
  actions?: Array<IAction>;
  lesson?: ILesson; // note: we don't have a course property here because a course is always split into multiple lesson manifests
  currentLessonIndex: number;
  audioItems: Array<IAudioItem>;
  error?: string;
  codeVideoIDEProps?: ICodeVideoIDEProps;
}