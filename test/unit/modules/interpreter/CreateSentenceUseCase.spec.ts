import "reflect-metadata"
import { CreateSentenceUseCase } from "@/application/modules/interpreter/useCases"
import { IChatService } from "@/application/services"
// import { container } from "@/shared/ioc"
import { TranslatorLanguageLabel } from "@/shared/types"
import { ChatServiceMock } from "../../../mocks/ChatServiceMock"
import { Container } from "inversify"

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
})
