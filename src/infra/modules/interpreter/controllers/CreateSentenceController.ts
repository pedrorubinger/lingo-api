import { Request, Response } from "express"

import { container } from "@/shared/ioc"
import { IController } from "@/core/index"
import { CreateSentenceUseCase } from "@/application/modules/interpreter/useCases"
import { CreateSentenceValidator } from "@/infra/modules/interpreter/validators"
import { ValidatorService } from "@/infra/services"
import { AppError, ErrorType } from "@/shared/types"

export class CreateSentenceController
  implements IController<Request, Response>
{
  async handle(request: Request, response: Response): Promise<Response> {
    const { sentence, language } = request.body
    const input = new CreateSentenceValidator({ sentence, language })
    const { isValid, errors } = await new ValidatorService().validate(input)

    if (!isValid)
      return response
        .status(400)
        .json(
          AppError.create({ type: ErrorType.VALIDATION, errors, status: 400 })
        )

    const useCase = container.get(CreateSentenceUseCase)
    const result = await useCase.exec({ sentence, language })

    if (result.isLeft()) {
      return response.status(result.value.status).json(result.value)
    }

    return response.status(201).send({ message: result.value.message })
  }
}
