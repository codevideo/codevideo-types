import { describe, expect, it } from "@jest/globals";
import { readFileSync } from "fs";
import { join } from "path";
import { estimateActionDurationsMs, estimateVideoDurationInSeconds } from "../src/utils/estimateVideoDuration";
import { IAction } from "../src/interfaces/IAction";

interface IEstimateCase {
    name: string;
    options: { keyboardTypingPauseMs?: number; standardPauseMs?: number; speechMs?: Record<string, number> };
    actions: IAction[];
    expectedMs: number[];
}

// codevideo-cli's Go estimator runs the same file (cli/estimate/testdata), so
// the two implementations can't drift apart silently.
const fixture: { cases: IEstimateCase[] } = JSON.parse(readFileSync(join(__dirname, "fixtures", "estimate-cases.json"), "utf8"));

describe("estimateActionDurationsMs", () => {
    it.each(fixture.cases.map(c => [c.name, c] as const))("matches the shared fixture: %s", (_, c) => {
        const durations = estimateActionDurationsMs(c.actions, c.options);
        expect(durations).toHaveLength(c.expectedMs.length);
        durations.forEach((ms, i) => expect(ms).toBeCloseTo(c.expectedMs[i], 3));
    });

    it("counts typed characters as JavaScript does (UTF-16 units)", () => {
        const [ms] = estimateActionDurationsMs([{ name: "editor-type", value: "héllo 👋" }], { keyboardTypingPauseMs: 10, standardPauseMs: 1 });
        expect(ms).toBe(1 + 8 * 10);
    });
});

describe("estimateVideoDurationInSeconds", () => {
    it("sums the action durations", () => {
        const actions: IAction[] = [
            { name: "author-speak-before", value: "one two three four five" },
            { name: "editor-type", value: "ab" },
        ];
        // 1s pause + 2s of speech, then 1s pause + 2 keys at 50ms.
        expect(estimateVideoDurationInSeconds(actions)).toBeCloseTo(4.1, 6);
        expect(estimateVideoDurationInSeconds(actions, { speechMs: { 0: 4000 } })).toBeCloseTo(6.1, 6);
    });
});
