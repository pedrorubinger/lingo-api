import { IError, Either } from "@shared/types"

export interface ICreateCompletionInput {
  text: string
}

export type ICreateCompletionOutput = Either<IError, boolean>
