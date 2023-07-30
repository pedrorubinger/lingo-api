import {
  ICreateCompletionInput,
  ICreateCompletionOutput,
} from "application/services/chat/dtos"

export interface IChatService {
  create(input: ICreateCompletionInput): Promise<ICreateCompletionOutput>
}
