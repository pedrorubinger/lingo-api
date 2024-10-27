import dotenv from "dotenv"

import { StageEnvironment } from "@/shared/types"
import { OpenAIConfiguration } from "@/infra/config/openai"
import { KeycloakConfiguration } from "@/infra/config/keycloak"

dotenv.config()

/* SERVER */
export const PORT = process.env.PORT
export const STAGE = process.env.STAGE as StageEnvironment

export { OpenAIConfiguration, KeycloakConfiguration }
