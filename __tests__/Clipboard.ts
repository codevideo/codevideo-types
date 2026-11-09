import { describe, expect, it } from "@jest/globals";
import { isValidAction } from "../src/validators/isValidAction";
import { isClipboardAction } from "../src/type-guards/isClipboardAction";
import { filterClipboardActions } from "../src/type-guards/filterClipboardActions";
import { isRepeatableAction } from "../src/type-guards/isRepeatableAction";
import { AllActionStrings } from "../src/constants/AllActionStrings";
import { AllActionDescriptions } from "../src/constants/AllActionDescriptions";
import { IAction } from "../src/interfaces/IAction";
import { ICourseSnapshot } from "../src/interfaces/toplevel/ICourseSnapshot";
import { getBlankInitialSnapshot } from "../src/utils/getBlankInitialSnapshot";

describe("clipboard actions", () => {
    it("are valid actions", () => {
        expect(isValidAction({ name: "clipboard-set-text", value: "const a = 1;\nconst b = 2;" })).toBeTruthy();
        expect(isValidAction({ name: "clipboard-clear", value: "1" })).toBeTruthy();
    });

    it("need text to put on the clipboard", () => {
        expect(isValidAction({ name: "clipboard-set-text", value: "" })).toBeFalsy();
    });

    it("reject carriage returns, which the renderer would drop", () => {
        expect(isValidAction({ name: "clipboard-set-text", value: "line one\r\nline two" })).toBeFalsy();
    });

    it("are told apart from other actions", () => {
        const actions: Array<IAction> = [
            { name: "editor-command-c", value: "1" },
            { name: "clipboard-set-text", value: "hello" },
            { name: "editor-command-v", value: "1" },
            { name: "clipboard-clear", value: "1" },
        ];
        expect(actions.map(isClipboardAction)).toEqual([false, true, false, true]);
        expect(filterClipboardActions(actions).map(action => action.name)).toEqual(["clipboard-set-text", "clipboard-clear"]);
    });

    it("are listed, so validators and the MCP know them", () => {
        expect(AllActionStrings).toEqual(expect.arrayContaining(["clipboard-set-text", "clipboard-clear"]));
    });
});

describe("copy, cut and paste", () => {
    it("include cut, a key press like copy and paste", () => {
        expect(AllActionStrings).toEqual(expect.arrayContaining(["editor-command-c", "editor-command-x", "editor-command-v"]));
        for (const name of ["editor-command-c", "editor-command-x", "editor-command-v"]) {
            expect(isValidAction({ name, value: "1" })).toBeTruthy();
            expect(isRepeatableAction({ name, value: "1" })).toBe(true);
        }
    });

    it("are described by what they do to the selection and the clipboard", () => {
        const description = (name: string) => AllActionDescriptions.find(row => row.name === name)?.description ?? "";
        expect(description("editor-command-c")).toMatch(/copies the selected text/i);
        expect(description("editor-command-x")).toMatch(/copies it to the clipboard and deletes it/i);
        expect(description("editor-command-v")).toMatch(/pastes the clipboard's text/i);
    });
});

describe("clipboard snapshot", () => {
    it("is optional, so snapshots from before the clipboard existed are still course snapshots", () => {
        const before: ICourseSnapshot = getBlankInitialSnapshot();
        expect(before.clipboardSnapshot).toBeUndefined();
        const after: ICourseSnapshot = { ...before, clipboardSnapshot: { text: "copied" } };
        expect(after.clipboardSnapshot?.text).toBe("copied");
        // whole-line copies say so; snapshots without the flag mean a normal copy
        expect(after.clipboardSnapshot?.isFullLine ?? false).toBe(false);
        const line: ICourseSnapshot = { ...before, clipboardSnapshot: { text: "const a = 1;\n", isFullLine: true } };
        expect(line.clipboardSnapshot?.isFullLine).toBe(true);
    });
});
