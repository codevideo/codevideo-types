import { isRepeatableAction } from '../src/type-guards/isRepeatableAction';
import { isValidActions } from '../src/validators/isValidActions';
import { AllActionDescriptions } from '../src/constants/AllActionDescriptions';

it.each(['editor-command+shift+arrow-right', 'editor-command+shift+arrow-left', 'editor-shift+end', 'editor-shift+home'])(
  '%s is documented, valid, and repeatable', name => {
    const action = { name, value: '3' };
    expect(isRepeatableAction(action)).toBe(true);
    expect(isValidActions([action]).isValid).toBe(true);
    expect(AllActionDescriptions.some(description => description.name === name)).toBe(true);
  },
);
