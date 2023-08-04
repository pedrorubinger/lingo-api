import { Either, IError, TranslatorLanguage } from "@shared/types"

export interface ICreateSentenceInput {
  sentence: string
  language: TranslatorLanguage
}

interface ICreateSenteceResponse {
  message: string
}

export type ICreateSentenceOutput = Either<IError, ICreateSenteceResponse>
