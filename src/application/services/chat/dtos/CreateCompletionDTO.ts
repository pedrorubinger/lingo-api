import { IError, Either, TranslatorLanguageLabel } from "@shared/types"

export interface ICreateTranslationInput {
  sentence: string
  language: TranslatorLanguageLabel
}

interface ICreateTranslationResponse {
  message: string
}

export type ICreateCompletionOutput = Either<IError, ICreateTranslationResponse>
