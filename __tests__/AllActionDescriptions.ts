import { AllActionDescriptions } from '../src/constants/AllActionDescriptions';
import { RepeatableActionNames } from '../src/constants/RepeatableActionNames';

// Authors and LLMs read these descriptions as they are (the MCP lists them), so
// a row that contradicts how its action behaves misleads every lesson written
// from it.

const rowFor = (name: string) => AllActionDescriptions.find(description => description.name === name);

it('describes each action once', () => {
  const names = AllActionDescriptions.map(description => description.name);
  expect(new Set(names).size).toBe(names.length);
});

it.each(RepeatableActionNames)('%s says its value is a count', name => {
  expect(rowFor(name)?.valueDescription).toMatch(/number of|'1'/i);
});

// Declared but implemented by neither the VirtualIDE nor the renderer yet.
const unsupported = AllActionDescriptions
  .map(description => description.name)
  .filter(name => name.startsWith('composite-') || name === 'editor-highlight-code');

it.each(unsupported)(
  '%s says it is not supported yet', name => {
    expect(rowFor(name)?.description).toMatch(/^Not supported yet/);
  },
);
