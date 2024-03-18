# codevideo-types

![NPM Version](https://img.shields.io/npm/v/:@fullstackcraftllc/codevideo-types)

TypeScript types used around the CodeVideo ecosystem.

## Interfaces

[IAction](./src/interfaces/IAction.ts) - The bread and butter of all things CodeVideo. An action is defined by a `name` and a `value` and can perform all possible actions in the CodeVideo ecosystem.

### Action Names

A convience array of all possible action names is available at [allActionStrings](./src/constants/allActionStrings.ts).

### Action Values

Action values are always strings, but typically represent a number when they are keyboard actions such as `arrow-up`, `enter`, etc.

_More documentation to come..._

