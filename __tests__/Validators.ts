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
            const result = isValidActions(actions)

            // assert
            expect(result.isValid).toBeFalsy()
            expect(result.errors).toHaveLength(1)
            expect(result.errors[0].actionIndex).toBe(3)
            expect(result.errors[0].message).toContain("Invalid action")
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
            const result = isValidActions(actions)

            // assert that validation passes
            expect(result.isValid).toBeTruthy()
            expect(result.errors).toHaveLength(0)
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
            const result = isValidActions(actions)

            // assert that validation fails
            expect(result.isValid).toBeFalsy()
            expect(result.errors).toHaveLength(1)
            expect(result.errors[0].actionIndex).toBe(0)
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
            const result = isValidActions(actions)

            // assert that validation fails
            expect(result.isValid).toBeFalsy()
            expect(result.errors).toHaveLength(1)
            expect(result.errors[0].actionIndex).toBe(0)
        })
    })
})
