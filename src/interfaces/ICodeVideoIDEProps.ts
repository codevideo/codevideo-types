import { GUIMode } from "../types/GUIMode";
import { Project } from "../types/toplevel/Project";

export interface ICodeVideoIDEProps {
  theme: 'light' | 'dark';
  project: Project;
  mode: GUIMode;
  allowFocusInEditor: boolean;
  currentActionIndex: number;
  currentLessonIndex: number | null
  defaultLanguage: string;
  isExternalBrowserStepUrl: string | null;
  isSoundOn: boolean;
  withCaptions: boolean;
  actionFinishedCallback?: () => void;
  playBackCompleteCallback?: () => void;
  // an array of audio elements to play when an action is spoken - if a speak action is not found by matching text, it will not play
  speakActionAudios: Array<{
    text: string,
    mp3Url: string
  }>;
  fileExplorerWidth?: number;
  terminalHeight?: number;
  mouseColor?: string;
  fontSizePx?: number;
  monacoLoadedCallback?: () => void;
  isEmbedMode?: boolean;
  requestStepModeCallback?: (mode: GUIMode) => void;
  requestNextActionCallback?: () => void;
  requestPreviousActionCallback?: () => void;
  requestPlaybackStartCallback?: () => void;
  isFileExplorerVisible?: boolean
  isTerminalVisible?: boolean;
  keyboardTypingPauseMs?: number;
  standardPauseMs?: number;
  longPauseMs?: number;
}