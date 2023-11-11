import { IValidationError } from "@/application/services/validator/dtos"
import { ErrorCode } from "@/shared/types/ErrorCode"

export enum ErrorType {
  VALIDATION = "VALIDATION",
  API = "API",
}

export interface IError {
  code: ErrorCode
  status: number
  type: ErrorType
  errors?: IValidationError[] | null
}

export class AppError {
  private code: ErrorCode
  private type: ErrorType
  private status: number
  private errors?: IValidationError[] | null

  constructor(
    code?: ErrorCode,
    status?: number,
    type?: ErrorType,
    errors?: IValidationError[] | null
  ) {
    this.code = code || ErrorCode.INTERNAL
    this.status = status || 500
    this.type = type || ErrorType.API
    this.errors = errors
  }

  get(): IError {
    return {
      code: this.code,
      status: this.status,
      type: this.type,
      errors: this.errors,
    }
  }

  static create(input?: Partial<IError>) {
    const code = input?.code || ErrorCode.INTERNAL
    const status = input?.status || 500
    const type = input?.type || ErrorType.API
    const errors = input?.errors

    return new AppError(code, status, type, errors).get()
  }
}
