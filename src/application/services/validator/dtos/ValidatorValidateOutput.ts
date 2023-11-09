interface IValidationError {
  property: string
  value?: any
  constraints?: {
    [type: string]: string
  }
}

export interface IValidatorValidateOutput {
  isValid: boolean
  errors: IValidationError[] | null
}
