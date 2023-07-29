import express from "express"
import cors from "cors"
import "reflect-metadata"

import { PORT, STAGE } from "@config"

const app = express()

app.use(cors())
app.listen(PORT, () => {
  console.log(`[ON] Server is running on port ${PORT} in ${STAGE} mode.`)
})
