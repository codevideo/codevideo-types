// repeatable actions are all actions that can be repeated multiple times in a row, where the "value" of the action is the number of times to repeat the action

export type RepeatableActionNames = | "editor-arrow-up" 
    | "editor-arrow-down" 
    | "editor-arrow-left" 
    | "editor-arrow-right" 
    | "editor-enter" 
    | "editor-tab"
    | "editor-shift+arrow-right"
    | "editor-shift+arrow-left"
    | "editor-shift+arrow-up"
    | "editor-shift+arrow-down"
    | "editor-command+shift+arrow-right"
    | "editor-command+shift+arrow-left"
    | "editor-shift+end"
    | "editor-shift+home"
    // terminal actions
    | "terminal-arrow-up"
    | "terminal-arrow-down"
    | "terminal-arrow-left"
    | "terminal-arrow-right"
    | "terminal-enter"
    | "terminal-tab"
    // mouse actions
    | "mouse-left-click"
    | "mouse-right-click"

