import { IValidatorValidateOutput } from "@/application/services/validator/dtos"

export interface IValidatorService {
  validate(data: object): Promise<IValidatorValidateOutput>
}
