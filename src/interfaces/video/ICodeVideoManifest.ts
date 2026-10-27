import { IAction } from "../IAction";
import { ICodeVideoIDEProps } from "../ICodeVideoIDEProps";
import { ILesson } from "../toplevel/ILesson";
import { IAudioItem } from "./IAudioItem";
import { RenderMode } from "../../types/RenderMode";
import { RenderStrategy } from "../../types/RenderStrategy";

// The main data carrier for all things done with CodeVideo video exports.
export interface ICodeVideoManifest {
  /** Defaults to sequential-seek. Only applies to deterministic rendering. */
  renderStrategy?: RenderStrategy;
  renderMode?: RenderMode;
  renderSeed?: string;
  /** Independent capture workers; only used for deterministic rendering. */
  renderWorkers?: number;
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
