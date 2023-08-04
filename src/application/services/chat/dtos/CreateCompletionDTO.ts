import { IError, Either, TranslatorLanguageLabel } from "@shared/types"

export interface ICreateCompletionInput {
  sentence: string
  language: TranslatorLanguageLabel
}

interface ICreateCompletionResponse {
  message: string
}

export type ICreateCompletionOutput = Either<IError, ICreateCompletionResponse>
