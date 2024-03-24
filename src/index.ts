import { PORT, STAGE } from "@/infra/config"
import { server } from "@/infra/http/server"
import { AppDataSource } from "@/infra/database/typeorm"

server.listen(PORT, async () => {
  console.log(`[ON] Server is running on port ${PORT} in ${STAGE} mode.`)

  try {
    await AppDataSource.initialize()

    console.log("[ON] The database has been initialized successfully.")
  } catch (err) {
    console.log("[ERROR] Error trying to initialize the database:", err)
  }
})
