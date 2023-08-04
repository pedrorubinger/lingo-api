import { inject, injectable } from "inversify"

import { IUseCase } from "@core"
import {
  ICreateSentenceInput,
  ICreateSentenceOutput,
} from "@application/modules/interpreter/dtos"
import { IChatService } from "@application/services"

@injectable()
export class CreateSentenceUseCase
  implements IUseCase<ICreateSentenceInput, ICreateSentenceOutput>
{
  constructor(@inject("ChatService") private chatService: IChatService) {}

  async exec({
    sentence,
    language,
  }: ICreateSentenceInput): Promise<ICreateSentenceOutput> {
    return await this.chatService.create({ sentence, language })
  }
}
