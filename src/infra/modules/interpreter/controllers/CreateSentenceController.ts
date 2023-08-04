import { Request, Response } from "express"

import { container } from "@shared/ioc"
import { IController } from "@core"
import { CreateSentenceUseCase } from "@application/modules/interpreter/useCases"

export class CreateSentenceController
  implements IController<Request, Response>
{
  async handle(request: Request, response: Response): Promise<Response> {
    const { sentence, language } = request.body

    /* TO DO: Validate input before invoking use case */
    const useCase = container.get(CreateSentenceUseCase)
    const result = await useCase.exec({ sentence, language })

    if (result.isLeft()) {
      return response.status(result.value.status).json(result.value)
    }

    return response.status(201).send({ message: result.value.message })
  }
}
