import express from "express"
import cors from "cors"
import "reflect-metadata"

import { router } from "@infra/http/routes"
import "@shared/ioc"

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

export { server }
