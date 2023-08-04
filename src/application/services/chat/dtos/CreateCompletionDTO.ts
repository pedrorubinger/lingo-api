import { IError, Either, TranslatorLanguage } from "@shared/types"

export interface ICreateCompletionInput {
  sentence: string
  language: TranslatorLanguage
}

interface ICreateCompletionResponse {
  message: string
}

export type ICreateCompletionOutput = Either<IError, ICreateCompletionResponse>
