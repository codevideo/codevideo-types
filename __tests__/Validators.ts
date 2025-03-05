import { describe, expect, it } from "@jest/globals";
import { isValidActions } from "../src/validators/isValidActions";
import { IAction } from "../src/interfaces/IAction";

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
    })
})
