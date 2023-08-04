import { Either, IError, TranslatorLanguageLabel } from "@shared/types"

export interface ICreateSentenceInput {
  sentence: string
  language: TranslatorLanguageLabel
}

interface ICreateSenteceResponse {
  message: string
}

export type ICreateSentenceOutput = Either<IError, ICreateSenteceResponse>
