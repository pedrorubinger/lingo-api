import { IError, Either } from "@shared/types"

export interface ICreateCompletionInput {
  prompt: string
}

interface ICreateCompletionResponse {
  message: string
}

export type ICreateCompletionOutput = Either<IError, ICreateCompletionResponse>
