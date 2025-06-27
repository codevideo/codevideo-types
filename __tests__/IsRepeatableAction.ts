import { describe, expect, it } from "@jest/globals";
import { isRepeatableAction } from "../src/type-guards/isRepeatableAction";
import { IAction } from "../src/interfaces/IAction";

describe("isRepeatableAction", () => {
    describe("should return true for repeatable actions", () => {
        it("should return true for editor navigation commands", () => {
            const repeatableEditorActions: IAction[] = [
                { name: "editor-arrow-up", value: "3" },
                { name: "editor-arrow-down", value: "5" },
                { name: "editor-arrow-left", value: "2" },
                { name: "editor-arrow-right", value: "1" },
                { name: "editor-command-left", value: "1" },
                { name: "editor-command-right", value: "2" },
                { name: "editor-enter", value: "1" },
                { name: "editor-tab", value: "4" },
            ];

            repeatableEditorActions.forEach(action => {
                expect(isRepeatableAction(action)).toBe(true);
            });
        });

    //     it("should return true for editor shortcuts and commands", () => {
    //         const repeatableEditorActions: IAction[] = [
    //             { name: "editor-save", value: "1" },
    //             { name: "editor-shift+arrow-left", value: "3" },
    //             { name: "editor-shift+arrow-right", value: "2" },
    //             { name: "editor-shift+arrow-down", value: "1" },
    //             { name: "editor-shift+arrow-up", value: "1" },
    //             { name: "editor-cmd+d", value: "2" },
    //             { name: "editor-backspace", value: "5" },
    //             { name: "editor-space", value: "3" },
    //             { name: "editor-command-d", value: "1" },
    //             { name: "editor-command-c", value: "1" },
    //             { name: "editor-command-v", value: "1" },
    //         ];

    //         repeatableEditorActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });

    //     it("should return true for terminal navigation commands", () => {
    //         const repeatableTerminalActions: IAction[] = [
    //             { name: "terminal-arrow-up", value: "2" },
    //             { name: "terminal-arrow-down", value: "1" },
    //             { name: "terminal-arrow-left", value: "3" },
    //             { name: "terminal-arrow-right", value: "4" },
    //             { name: "terminal-enter", value: "1" },
    //             { name: "terminal-tab", value: "2" },
    //         ];

    //         repeatableTerminalActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });

    //     it("should return true for terminal shortcuts", () => {
    //         const repeatableTerminalActions: IAction[] = [
    //             { name: "terminal-shift+arrow-right", value: "2" },
    //             { name: "terminal-shift+arrow-left", value: "1" },
    //             { name: "terminal-backspace", value: "3" },
    //             { name: "terminal-space", value: "2" },
    //             { name: "terminal-command-left", value: "1" },
    //             { name: "terminal-command-right", value: "1" },
    //             { name: "terminal-command-c", value: "1" },
    //             { name: "terminal-command-v", value: "1" },
    //         ];

    //         repeatableTerminalActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });

    //     it("should return true for mouse click actions", () => {
    //         const repeatableMouseActions: IAction[] = [
    //             { name: "mouse-left-click", value: "3" },
    //             { name: "mouse-double-left-click", value: "2" },
    //             { name: "mouse-triple-left-click", value: "1" },
    //             { name: "mouse-right-click", value: "2" },
    //             { name: "mouse-right-double-click", value: "1" },
    //             { name: "mouse-right-triple-click", value: "1" },
    //         ];

    //         repeatableMouseActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });

    //     it("should return true for other repeatable actions", () => {
    //         const otherRepeatableActions: IAction[] = [
    //             { name: "editor-highlight-code", value: "1" },
    //             { name: "editor-delete-line", value: "2" },
    //             { name: "editor-shift-down-arrow", value: "3" },
    //             { name: "editor-shift-up-arrow", value: "1" },
    //         ];

    //         otherRepeatableActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });
    // });

    // describe("should return false for non-repeatable actions", () => {
    //     it("should return false for typing actions", () => {
    //         const typingActions: IAction[] = [
    //             { name: "editor-type", value: "Hello World" },
    //             { name: "terminal-type", value: "npm install" },
    //             { name: "file-explorer-type-new-file-input", value: "newfile.js" },
    //             { name: "file-explorer-type-new-folder-input", value: "newfolder" },
    //             { name: "file-explorer-type-rename-file-input", value: "renamed.js" },
    //             { name: "file-explorer-type-rename-folder-input", value: "renamed-folder" },
    //         ];

    //         typingActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(false);
    //         });
    //     });

    //     it("should return false for speak actions", () => {
    //         const speakActions: IAction[] = [
    //             { name: "author-speak-before", value: "Welcome to this tutorial" },
    //             { name: "author-speak-after", value: "That concludes this section" },
    //             { name: "author-speak-during", value: "As you can see here" },
    //         ];

    //         speakActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(false);
    //         });
    //     });

    //     it("should return false for file-explorer actions", () => {
    //         const fileExplorerActions: IAction[] = [
    //             { name: "file-explorer-set-file-contents", value: "console.log('hello');" },
    //             { name: "file-explorer-create-file", value: "index.js" },
    //             { name: "file-explorer-open-file", value: "package.json" },
    //             { name: "file-explorer-close-file", value: "index.js" },
    //             { name: "file-explorer-rename-file", value: "oldname.js:newname.js" },
    //             { name: "file-explorer-delete-file", value: "temp.js" },
    //             { name: "file-explorer-move-file", value: "src/index.js:dist/index.js" },
    //             { name: "file-explorer-copy-file", value: "template.js:copy.js" },
    //             { name: "file-explorer-create-folder", value: "components" },
    //             { name: "file-explorer-expand-folder", value: "src" },
    //             { name: "file-explorer-collapse-folder", value: "node_modules" },
    //             { name: "file-explorer-rename-folder", value: "old:new" },
    //             { name: "file-explorer-delete-folder", value: "temp" },
    //             { name: "file-explorer-toggle-folder", value: "utils" },
    //             { name: "file-explorer-move-folder", value: "src:lib" },
    //             { name: "file-explorer-copy-folder", value: "template:copy" },
    //         ];

    //         fileExplorerActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(false);
    //         });
    //     });

    //     it("should return false for slide actions", () => {
    //         const slideActions: IAction[] = [
    //             { name: "slide-display", value: "Welcome Slide" },
    //         ];

    //         slideActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(false);
    //         });
    //     });

    //     it("should return false for other non-repeatable actions", () => {
    //         const nonRepeatableActions: IAction[] = [
    //             // These contain excluded keywords, so they should be non-repeatable
    //             { name: "file-explorer-enter-new-file-input", value: "1" }, // contains "file-explorer"
    //             { name: "file-explorer-enter-new-folder-input", value: "1" }, // contains "file-explorer"
    //             { name: "file-explorer-enter-rename-file-input", value: "1" }, // contains "file-explorer"
    //             { name: "file-explorer-enter-rename-folder-input", value: "1" }, // contains "file-explorer"
    //         ];

    //         nonRepeatableActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(false);
    //         });
    //     });

    //     it("should return true for actions that don't contain excluded patterns", () => {
    //         // Actions that don't contain 'type', 'speak', 'file-explorer', or 'slide-' should be repeatable
    //         const repeatableActions: IAction[] = [
    //             { name: "author-wait", value: "2000" },
    //             { name: "terminal-open", value: "" },
    //             { name: "terminal-set-output", value: "Build successful" },
    //             { name: "terminal-set-prompt", value: "user@machine:~$" },
    //             { name: "terminal-set-present-working-directory", value: "/home/user" },
    //             { name: "external-browser", value: "https://example.com" },
    //         ];

    //         repeatableActions.forEach(action => {
    //             expect(isRepeatableAction(action)).toBe(true);
    //         });
    //     });
    // });

    // describe("edge cases", () => {
    //     it("should handle empty or unusual values", () => {
    //         const actionsWithUnusualValues: IAction[] = [
    //             { name: "editor-arrow-right", value: "" }, // repeatable action with empty value are not allowed
    //             { name: "mouse-left-click", value: "0" }, // repeatable action with zero value
    //             { name: "editor-type", value: "" }, // non-repeatable action with empty value
    //         ];

    //         expect(isRepeatableAction(actionsWithUnusualValues[0])).toBe(false);
    //         expect(isRepeatableAction(actionsWithUnusualValues[1])).toBe(true);
    //         expect(isRepeatableAction(actionsWithUnusualValues[2])).toBe(false);
    //     });

    //     it("should correctly identify complex action names", () => {
    //         // Test some complex but valid action names to ensure the function works correctly
    //         const complexActions: IAction[] = [
    //             { name: "mouse-move", value: "100,200" }, // repeatable (no excluded keywords)
    //             { name: "mouse-move-file-explorer", value: "1" }, // non-repeatable (contains file-explorer pattern indirectly)
    //             { name: "mouse-move-editor", value: "1" }, // repeatable (doesn't contain excluded keywords)
    //             { name: "editor-shift+arrow-left", value: "3" }, // repeatable
    //             { name: "terminal-shift+arrow-right", value: "2" }, // repeatable
    //         ];

    //         expect(isRepeatableAction(complexActions[0])).toBe(true);
    //         expect(isRepeatableAction(complexActions[1])).toBe(true); // mouse-move actions are repeatable
    //         expect(isRepeatableAction(complexActions[2])).toBe(true);
    //         expect(isRepeatableAction(complexActions[3])).toBe(true);
    //         expect(isRepeatableAction(complexActions[4])).toBe(true);
    //     });
    });
});