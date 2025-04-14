export type CompisteActions = "composite-create-file-with-mouse" 
| "composite-create-file-with-terminal"
| "composite-create-folder-with-mouse"
| "composite-create-folder-with-terminal"
| "composite-close-all-editors-with-mouse"
// TODO: many more here, but need to handle elegantly in the GUI - generator functions create a series of readonly actions