import {
  ICreateCompletionInput,
  ICreateCompletionOutput,
} from "application/services/chat/dtos"

export interface IChatService {
  createTranslation(
    input: ICreateCompletionInput
  ): Promise<ICreateCompletionOutput>
}
