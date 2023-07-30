import express from "express"
import cors from "cors"
import "reflect-metadata"

import "@shared/ioc"
import { PORT, STAGE } from "@infra/config"
import { router } from "@infra/http/routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`[ON] Server is running on port ${PORT} in ${STAGE} mode.`)
})
