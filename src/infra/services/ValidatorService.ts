import { validate } from "class-validator"

import { IValidatorService } from "@application/services"
import { IValidatorValidateOutput } from "@application/services/validator/dtos/ValidatorValidateOutput"

export class ValidatorService implements IValidatorService {
  constructor() {}

  async validate(data: object): Promise<IValidatorValidateOutput> {
    const errors = await validate(data)

    if (errors.length) return { errors, isValid: false }
    return { errors: null, isValid: true }
  }
}
