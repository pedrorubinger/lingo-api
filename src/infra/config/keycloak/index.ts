import dotenv from "dotenv"

dotenv.config()

export const KeycloakConfiguration = {
  url: process.env.KEYCLOAK_SERVER_URL,
  adminUsername: process.env.KEYCLOAK_ADMIN_USERNAME,
  adminPassword: process.env.KEYCLOAK_ADMIN_PASSWORD,
}
