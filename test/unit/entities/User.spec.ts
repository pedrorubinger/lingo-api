import "reflect-metadata"

import {
  UserEntity,
  UserRole,
  UserStatus,
} from "@/application/modules/user/entities"
import { Container } from "inversify"
import { IdService } from "@/infra/services"
import { IIdService } from "@/application/services"

describe("User Entity", () => {
  const container = new Container()

  container.bind<IIdService>("IdService").toConstantValue(IdService)

  it("should create a user entity successfully", async () => {
    expect.assertions(4)

    const props = {
      name: "Pedro",
      email: "pedro@test.com",
      birthdate: new Date(),
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
    }
    const result = new UserEntity(props)

    expect(result.props.id).toBeDefined()
    expect(result.props.updatedAt).toBeDefined()
    expect(result.props.createdAt).toBeDefined()
    expect(result.props.name).toBe(props.name)
  })

  it("should correctly identify underage users", async () => {
    expect.assertions(2)

    const underageProps = {
      name: "Underage User",
      email: "underage@test.com",
      birthdate: new Date(`${new Date().getFullYear() - 13}-02-24`),
      role: UserRole.CUSTOMER,
      status: UserStatus.ACTIVE,
    }
    const underageUser = new UserEntity(underageProps)

    const adultProps = {
      name: "Adult User",
      email: "adult@test.com",
      birthdate: new Date("1980-01-01"),
      role: UserRole.CUSTOMER,
      status: UserStatus.ACTIVE,
    }
    const adultUser = new UserEntity(adultProps)

    expect(underageUser.isUnderAge()).toBe(true)
    expect(adultUser.isUnderAge()).toBe(false)
  })
})
