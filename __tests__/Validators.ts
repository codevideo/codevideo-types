import { describe, expect, it } from "@jest/globals";
import { isValidActions } from "../src/validators/isValidActions";
import { IAction } from "../src/interfaces/IAction";
import { advancedCommandValueSeparator } from "../src/constants/advancedCommandValueSeparator";

describe("Validators", () => {
    describe("isValidActions", () => {
        it("should validate valid actions", () => {
            // arrange - valid actions
            const actions: Array<IAction> = [
                {
                    "name": "author-speak-before",
                    "value": "My new speak action"
                },
                {
                    "name": "author-speak-before",
                    "value": "My other new speak action"
                },
                {
                    "name": "author-speak-before",
                    "value": "And another speak action"
                },
                {
                    "name": "file-explorer-create-file",
                    "value": "" // fails because of empty value
                }
            ]

            // act
            const isValid = isValidActions(actions)

            // assert
            expect(isValid).toBeFalsy()
        })

        it("should validate an advanced value action that has the separator", () => {
            // arrange - valid actions
            const actions: Array<IAction> = [
                {
                    "name": "file-explorer-move-file",
                    "value": `file1${advancedCommandValueSeparator}file2`
                },
            ]

            // act
            const isValid = isValidActions(actions)

            // assert that validation passes
            expect(isValid).toBeTruthy()
        })

        it("should NOT validate an advanced value action that does NOT have the specified separator", () => {
            // arrange - valid actions
            const actions: Array<IAction> = [
                {
                    "name": "file-explorer-move-file",
                    "value": `from:file1;to:file2`// old legacy way should fail now
                },
            ]

            // act
            const isValid = isValidActions(actions)

            // assert that validation fails
            expect(isValid).toBeFalsy()
        })

        it("should NOT validate an advanced value action that does NOT have the separator at all", () => {
            // arrange - valid actions
            const actions: Array<IAction> = [
                {
                    "name": "file-explorer-move-file",
                    "value": `z`// other garbage input
                },
            ]

            // act
            const isValid = isValidActions(actions)

            // assert that validation fails
            expect(isValid).toBeFalsy()
        })
    })
})
