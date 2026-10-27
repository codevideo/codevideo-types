import { IAction } from '../interfaces/IAction';

/** Authored actions whose playback can expose internal resumable steps. */
export type SteppableAction = IAction & {
  name:
    | 'editor-type'
    | 'terminal-type'
    | 'file-explorer-type-new-file-input'
    | 'file-explorer-type-new-folder-input'
    | 'file-explorer-type-rename-file-input'
    | 'file-explorer-type-rename-folder-input'
    | 'author-wait';
};
