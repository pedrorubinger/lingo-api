import { inject, injectable } from "inversify"
import { OpenAIApi } from "openai"

import { AppError, ErrorCode, left, right } from "@shared/types"
import { IChatService } from "@application/services"
import {
  ICreateCompletionInput,
  ICreateCompletionOutput,
} from "@application/services/chat/dtos"

@injectable()
export class ChatService implements IChatService {
  private model: string = "gpt-3.5-turbo"

  constructor(@inject("OpenAIApi") private api: OpenAIApi) {}

  async create({
    prompt,
  }: ICreateCompletionInput): Promise<ICreateCompletionOutput> {
    try {
      const response = await this.api.createChatCompletion({
        model: this.model,
        temperature: 0,
        max_tokens: 256,
        messages: [{ role: "user", content: prompt }],
      })
      const message = response.data.choices[0].message?.content

      if (!message) {
        return left(
          new AppError(ErrorCode.CHAT_SERVICE_NO_MESSAGE_RETURN, 400).get()
        )
      }

      return right({ message })
    } catch (err: any) {
      console.log("[ERROR] ChatService > create:", err?.response?.data || err)
      return left(new AppError().get())
    }
  }
}
