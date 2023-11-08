import { PORT, STAGE } from "@infra/config"
import { server } from "@infra/http/server"

server.listen(PORT, () => {
  console.log(`[ON] Server is running on port ${PORT} in ${STAGE} mode.`)
})
