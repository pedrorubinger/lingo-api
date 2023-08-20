import {
  ICreateTranslationInput,
  ICreateCompletionOutput,
} from "application/services/chat/dtos"

export interface IChatService {
  createTranslation(
    input: ICreateTranslationInput
  ): Promise<ICreateCompletionOutput>
}
