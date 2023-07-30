import { Either, IError } from "@shared/types"

export interface ICreateSentenceInput {
  text: string
}

export type ICreateSentenceOutput = Either<IError, boolean>
