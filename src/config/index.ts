import dotenv from "dotenv"

import { StageEnvironment } from "@shared/types"
import { OPENAI_BASE_URL, OpenAIConfiguration } from "@config/infra/openai"

dotenv.config()

/* SERVER */
export const PORT = process.env.PORT
export const STAGE = process.env.STAGE as StageEnvironment

/* OPEN AI */
export { OpenAIConfiguration, OPENAI_BASE_URL }
