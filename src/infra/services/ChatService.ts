import { inject, injectable } from "inversify"
import { OpenAIApi } from "openai"

import {
  AppError,
  ErrorCode,
  TranslatorLanguage,
  TranslatorLanguageLabel,
  left,
  right,
} from "@shared/types"
import { IChatService } from "@application/services"
import {
  ICreateCompletionInput,
  ICreateCompletionOutput,
} from "@application/services/chat/dtos"

@injectable()
export class ChatService implements IChatService {
  private model: string = "gpt-3.5-turbo"

  constructor(@inject("OpenAIApi") private api: OpenAIApi) {}

  async createTranslation({
    sentence,
    language,
  }: ICreateCompletionInput): Promise<ICreateCompletionOutput> {
    try {
      const lang =
        TranslatorLanguageLabel[language as unknown as TranslatorLanguage]
      const prompt = `
        Translate the following sentence to ${lang}.
        Remember: Do not translate it literally.
        You can adapt the text to make it sound more natural.
        Provide only the translated sentence, without any additional content.

        The sentence you must translate is: ${sentence}
      `
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
