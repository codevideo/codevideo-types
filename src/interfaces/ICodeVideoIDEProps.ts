import { GUIMode } from "../types/GUIMode";
import { Project } from "../types/toplevel/Project";

/**
 * Props for the CodeVideoIDE React component (@fullstackcraftllc/codevideo-ide-react).
 *
 * The component is fully controlled: the parent owns `currentActionIndex` and
 * `mode`, and the component derives (or animates toward) the IDE state at that
 * index. In 'replay' mode the parent advances the index from
 * `actionFinishedCallback` to drive playback.
 */
export interface ICodeVideoIDEProps {
  /** Color theme for the IDE chrome and the Monaco editor ('vs' / 'vs-dark'). */
  theme: 'light' | 'dark';
  /** The content to drive the IDE: a raw actions array, a single lesson, or a whole course. */
  project: Project;
  /**
   * How the IDE behaves:
   * - 'step': instantly reconstitutes the full IDE state at currentActionIndex (no animation)
   * - 'replay': animates the current action (typing, mouse, speech), then calls actionFinishedCallback
   * - 'record': a live, editable IDE; no playback
   */
  mode: GUIMode;
  /** When true, caret positioning also focuses the Monaco editor so the caret is visibly highlighted. */
  allowFocusInEditor: boolean;
  /** Index of the current action within the extracted actions. Owned by the parent (controlled). */
  currentActionIndex: number;
  /**
   * Which lesson's actions to use when `project` is a course. Ignored for
   * lesson- or array-shaped projects. null (or out of range) on a course
   * yields no actions.
   */
  currentLessonIndex: number | null
  /** Editor language before a filename is opened; afterwards the language is detected from the file extension. */
  defaultLanguage: string;
  /**
   * @deprecated No longer read by the component - external browser display is
   * driven by 'external-browser' / 'external-browser-scroll' actions instead.
   * Pass null.
   */
  isExternalBrowserStepUrl: string | null;
  /** Master switch for speech audio (pre-generated mp3s or speech synthesis) during playback and step mode. */
  isSoundOn: boolean;
  /** When true, renders the caption overlay with the current author speech text. */
  withCaptions: boolean;
  /**
   * Replay mode: called after the current action's animation completes and its
   * state is committed. The parent should increment currentActionIndex here to
   * continue playback.
   */
  actionFinishedCallback?: () => void;
  /**
   * Replay mode: called when currentActionIndex points past the available
   * actions (i.e. playback is finished). Not called while `isStreaming` is
   * true - see that prop.
   */
  playBackCompleteCallback?: () => void;
  /**
   * Pre-generated audio for author actions, matched by exact `text` equality
   * with the action's value. When no match is found, the component falls back
   * to speech synthesis.
   */
  speakActionAudios: Array<{
    text: string,
    mp3Url: string
  }>;
  /** Width of the file explorer pane in pixels. */
  fileExplorerWidth?: number;
  /** Height of the terminal pane in pixels. */
  terminalHeight?: number;
  /** CSS color of the animated mouse overlay cursor. */
  mouseColor?: string;
  /** Base font size in pixels for the editor and IDE chrome. Automatically doubled when resolution is '4K'. */
  fontSizePx?: number;
  /** Called once the Monaco editor has mounted. Consumers typically wait for this before starting replay. */
  monacoLoadedCallback?: () => void;
  /**
   * Embed mode: shows a start overlay and binds keyboard controls
   * (ArrowRight/ArrowLeft request step-mode navigation, space requests
   * playback start) which call the request* callbacks below.
   */
  isEmbedMode?: boolean;
  /** Embed keyboard: asks the parent to switch GUI mode (always called with 'step'). */
  requestStepModeCallback?: (mode: GUIMode) => void;
  /** Embed keyboard (ArrowRight): asks the parent to advance to the next action. */
  requestNextActionCallback?: () => void;
  /** Embed keyboard (ArrowLeft): asks the parent to go back one action. */
  requestPreviousActionCallback?: () => void;
  /** Embed keyboard (space): asks the parent to start playback. */
  requestPlaybackStartCallback?: () => void;
  /** Render the file explorer pane. Default true. */
  isFileExplorerVisible?: boolean
  /** Render the terminal pane. Default true. */
  isTerminalVisible?: boolean;
  /** Delay between simulated keystrokes in editor/terminal/input typing animations. Default 50ms. */
  keyboardTypingPauseMs?: number;
  /** Pause for non-typing animation beats (mouse movement, file operations, scrolling). Default 1000ms. */
  standardPauseMs?: number;
  /** Long pause reserved for slide and external display steps. Default 5000ms. */
  longPauseMs?: number;
  /** Render resolution profile; '4K' doubles fontSizePx. */
  resolution: '1080p' | '4K';
  /** Render a floating dev box showing live playback internals (current action, index, mouse/caret state). Default false. */
  showDevBox?: boolean;
  /**
   * Streaming mode (e.g. actions generated live by an LLM or otherwise streamed to the component): appends to the
   * actions array continue playback seamlessly, and when playback runs out of
   * actions it idles instead of calling playBackCompleteCallback. Set this
   * back to false once the stream ends to get normal completion semantics.
   * Default false = exact legacy behavior.
   */
  isStreaming?: boolean;
  /** Enable the component's verbose internal console logging. Default false. */
  debug?: boolean;
}
