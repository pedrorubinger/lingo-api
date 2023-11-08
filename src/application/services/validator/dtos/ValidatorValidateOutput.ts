/* TO DO: Replace this type with a custom one. */
import { ValidationError } from "class-validator"

export interface IValidatorValidateOutput {
  isValid: boolean
  errors: ValidationError[] | null
}
