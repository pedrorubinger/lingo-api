import { Request, Response } from "express"

import { container } from "@shared/ioc"
import { CreateSentenceUseCase } from "@application/modules/interpreter/useCases"

export class CreateSentenceController {
  async handle(request: Request, response: Response) {
    const { text } = request.body

    const useCase = container.get(CreateSentenceUseCase)
    const result = await useCase.exec({ text })

    if (result.isLeft()) {
      return response.status(result.value.status).json(result.value)
    }

    return response
      .status(201)
      .send({ message: "Sentence successfully created." })
  }
}
