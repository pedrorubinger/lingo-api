import { Container } from "inversify"
import { OpenAIApi } from "openai"

import { OpenAIConfiguration } from "@/infra/config"
import { ChatService, IdService, ValidatorService } from "@/infra/services"
import {
  IChatService,
  IIdService,
  IValidatorService,
} from "@/application/services"
import { CreateSentenceUseCase } from "@/application/modules/interpreter/useCases"

export const container = new Container()

/* Config */
container
  .bind<OpenAIApi>("OpenAIApi")
  .toConstantValue(new OpenAIApi(OpenAIConfiguration))

/* Services */
container.bind<IChatService>("ChatService").to(ChatService)
container.bind<IValidatorService>("ValidatorService").to(ValidatorService)
container.bind<IIdService>("IdService").to(IdService)

/* Use Cases */
container.bind(CreateSentenceUseCase).toSelf()
