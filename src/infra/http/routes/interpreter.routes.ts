import { Router } from "express"

import { CreateSentenceController } from "@infra/modules/interpreter/controllers"

const interpreterRoutes = Router()

const createSentenceController = new CreateSentenceController()

interpreterRoutes.post("/", createSentenceController.handle)

export { interpreterRoutes }
