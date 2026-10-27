import { isSteppableAction } from '../src/type-guards/isSteppableAction';
import { AllActionStrings } from '../src/constants/AllActionStrings';

test('only the supported typing surfaces and waits are steppable', () => {
  expect(AllActionStrings.filter(name => isSteppableAction({ name, value: '' })).sort()).toEqual([
    'author-wait', 'editor-type', 'file-explorer-type-new-file-input',
    'file-explorer-type-new-folder-input', 'file-explorer-type-rename-file-input',
    'file-explorer-type-rename-folder-input', 'terminal-type',
  ]);
});
