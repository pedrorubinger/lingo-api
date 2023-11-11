import { Container } from "inversify"
import "reflect-metadata"

import { CreateSentenceUseCase } from "@/application/modules/interpreter/useCases"
import { IChatService } from "@/application/services"
import {
  AppError,
  ErrorCode,
  TranslatorLanguageLabel,
  left,
} from "@/shared/types"
import { ChatServiceMock } from "../../../mocks/ChatServiceMock"

describe("Interpreter > CreateSentenceUseCase", () => {
  const container = new Container()

  container.bind<IChatService>("ChatService").toConstantValue(ChatServiceMock)
  container.bind(CreateSentenceUseCase).toSelf()

  const createSentenceUseCase = container.get(CreateSentenceUseCase)

  it("should create a sentence", async () => {
    expect.assertions(3)

    const result = await createSentenceUseCase.exec({
      language: TranslatorLanguageLabel.ENGLISH,
      sentence: "Lorem ipsum dolor",
    })

    expect(result.isLeft()).toBeFalsy()

    if (result.isRight()) {
      expect(result.value.message).toBeDefined()
      expect(typeof result.value.message).toBe("string")
    }
  })

  it("should throw an error when the message is not created", async () => {
    expect.assertions(3)

    ChatServiceMock.createTranslation.mockRejectedValue(
      left(new AppError(ErrorCode.CHAT_SERVICE_NO_MESSAGE_RETURN, 400).get())
    )

    try {
      await createSentenceUseCase.exec({
        language: TranslatorLanguageLabel.ENGLISH,
        sentence: "Lorem ipsum dolor",
      })
    } catch (err: any) {
      expect(err.isRight()).toBeFalsy()

      if (err.isLeft()) {
        expect(err.value.code).toBe(ErrorCode.CHAT_SERVICE_NO_MESSAGE_RETURN)
        expect(err.value.status).toBe(400)
      }
    }
  })

  it("should throw an error when something goes wrong", async () => {
    expect.assertions(3)

    ChatServiceMock.createTranslation.mockRejectedValue(
      left(new AppError().get())
    )

    try {
      await createSentenceUseCase.exec({
        language: TranslatorLanguageLabel.ENGLISH,
        sentence: "Lorem ipsum dolor",
      })
    } catch (err: any) {
      expect(err.isRight()).toBeFalsy()

      if (err.isLeft()) {
        expect(err.value.code).toBe(ErrorCode.INTERNAL)
        expect(err.value.status).toBe(500)
      }
    }
  })
})
