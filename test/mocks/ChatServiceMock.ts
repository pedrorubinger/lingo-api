import { IChatService } from "@/application/services"
import { right } from "@/shared/types"

export const ChatServiceMock: jest.Mocked<IChatService> = {
  createTranslation: jest
    .fn()
    .mockResolvedValue(right({ message: "I'm a dummy message." })),
}
