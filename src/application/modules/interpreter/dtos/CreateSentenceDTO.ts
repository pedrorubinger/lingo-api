import { Either, IError } from "@shared/types"

export interface ICreateSentenceInput {
  prompt: string
}

interface ICreateSenteceResponse {
  message: string
}

export type ICreateSentenceOutput = Either<IError, ICreateSenteceResponse>
