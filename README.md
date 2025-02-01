# codevideo-types

![NPM Version](https://img.shields.io/npm/v/@fullstackcraftllc/codevideo-types)

TypeScript types used around the CodeVideo ecosystem.

## Theory

A software course is represented by the top level interface [`ICourse`](/src/interfaces/toplevel/ICourse.ts). A course is made up of an array of [`ILessons`](./src/interfaces/toplevel/ILesson.ts), which are made up of a series of [`IActions`](./src/interfaces/toplevel/IAction.ts). Each of `ICourse`, `ILesson`, and `IAction` also have additional metadata properties.

Read more about this in [our whitepaper](https://studio.codevideo.io/pdf/CodeVideo_Framework_White_Paper.pdf).

### Domains

There are 5 domains to a codevideo action: the file explorer, the editor, the terminal, the mouse, and the author. Each of these domains has its own set of actions that can be performed with it, prefixed by `file-explorer-`, `editor-`, `terminal-`, `mouse-`, and `author-` respectively.

### IAction

[`IAction`](./src/interfaces/IAction.ts) - The bread and butter of all things CodeVideo. An action is defined by a `name` and a `value` and can perform all possible actions in the CodeVideo ecosystem. Examples include `type-editor`, `type-terminal`, `arrow-up`, `enter`, etc.

#### Action Names

A convenience array of all possible action names is available at [AllActionStrings](./src/constants/AllActionStrings.ts).

#### Action Values

Action values are always strings, but typically represent a number when they are repeatable actions such as `editor-arrow-up`, `editor-enter`, etc. These are catalogued in [RepeatableActionNames](./src/types/RepeatableActionNames.ts).

### Project Snapshots

A project snapshot is a snapshot of the state of a project at a given point in time. It is represented by the [`IProjectSnapshot`](./src/interfaces/IProjectSnapshot.ts) interface. Any instance of `IProjectSnapshot` can be derived by evaluating the actions in the project up to the point in time that the snapshot was taken.

