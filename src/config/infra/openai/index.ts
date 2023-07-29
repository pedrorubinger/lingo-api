import dotenv from "dotenv"
import { Configuration } from "openai"

dotenv.config()

export const OpenAIConfiguration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

export const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL
