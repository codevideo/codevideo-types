import { IActionValidationError } from "./IActionValidationError";

export interface IActionValidationResult {
    isValid: boolean;
    errors: IActionValidationError[];
}