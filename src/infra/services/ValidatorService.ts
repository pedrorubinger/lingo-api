import { ValidationError, validate } from "class-validator"

interface IValidatorValidateOutput {
  isValid: boolean
  errors: ValidationError[] | null
}

export class ValidatorService {
  constructor() {}

  async validate(data: object): Promise<IValidatorValidateOutput> {
    const errors = await validate(data)

    if (errors.length) return { errors, isValid: false }
    return { errors: null, isValid: true }
  }
}
