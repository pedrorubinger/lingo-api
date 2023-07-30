import { inject, injectable } from "inversify"
import { OpenAIApi } from "openai"

import { AppError, left, right } from "@shared/types"
import { IChatService } from "@application/services"
import { ICreateCompletionOutput } from "@application/services/chat/dtos"

@injectable()
export class ChatService implements IChatService {
  private model: string = "gpt-3.5-turbo"

  constructor(@inject("OpenAIApi") private api: OpenAIApi) {}

  async create(): Promise<ICreateCompletionOutput> {
    try {
      await this.api.createCompletion({
        model: this.model,
        temperature: 0,
        max_tokens: 256,
      })

      return right(true)
    } catch (err: any) {
      console.log("[ERROR] ChatService > create:", err?.response?.data || err)
      return left(new AppError().get())
    }
  }
}
