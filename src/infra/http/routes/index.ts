import { Router } from "express"

import { interpreterRoutes } from "@infra/http/routes/interpreter.routes"

const router = Router()

router.use("/interpreter", interpreterRoutes)

export { router }
