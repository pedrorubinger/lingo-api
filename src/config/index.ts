import dotenv from "dotenv"

import { StageEnvironment } from "@shared"

dotenv.config()

/** SERVER */
export const PORT = process.env.PORT
export const STAGE = process.env.STAGE as StageEnvironment
