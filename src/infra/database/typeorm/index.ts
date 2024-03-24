import "reflect-metadata"
import { DataSource } from "typeorm"

const credentials = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
}

export const AppDataSource = new DataSource({
  type: "postgres",
  ...credentials,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
})
