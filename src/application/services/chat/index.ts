import {
  ICreateTranslationInput,
  ICreateTranslationOutput,
} from "application/services/chat/dtos"

export interface IChatService {
  createTranslation(
    input: ICreateTranslationInput
  ): Promise<ICreateTranslationOutput>
}
