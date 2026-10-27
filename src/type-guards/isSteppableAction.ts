import { IAction } from '../interfaces/IAction';
import { SteppableAction } from '../types/SteppableAction';

/** Identifies execution support, not whether the current presentation is safe to save. */
export function isSteppableAction(action: IAction): action is SteppableAction {
  switch (action.name) {
    case 'editor-type':
    case 'terminal-type':
    case 'file-explorer-type-new-file-input':
    case 'file-explorer-type-new-folder-input':
    case 'file-explorer-type-rename-file-input':
    case 'file-explorer-type-rename-folder-input':
    case 'author-wait':
      return true;
    default:
      return false;
  }
}
