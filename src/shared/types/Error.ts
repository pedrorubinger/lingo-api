export enum ErrorCode {
  INTERNAL = "INTERNAL_SERVER_ERROR",
  CHAT_SERVICE_NO_MESSAGE_RETURN = "CHAT_SERVICE_NO_MESSAGE_RETURN",
}

export interface IError {
  code: ErrorCode
  status: number
}

export class AppError {
  private code: ErrorCode
  private status: number

  constructor(code?: ErrorCode, status?: number) {
    this.code = code || ErrorCode.INTERNAL
    this.status = status || 500
  }

  get(): IError {
    return { code: this.code, status: this.status }
  }
}
