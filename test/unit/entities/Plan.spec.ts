import "reflect-metadata"
import { Container } from "inversify"
import { IdService } from "@/infra/services"
import {
  PlanEntity,
  ICreatePlanEntityProps,
} from "@/application/modules/user/entities"

describe("Plan Entity", () => {
  const container = new Container()

  container.bind("IdService").toConstantValue(IdService)

  it("should create a plan entity successfully", async () => {
    expect.assertions(4)

    const props: ICreatePlanEntityProps = {
      name: "Basic Plan",
      price: 10.99,
    }
    const result = new PlanEntity(props)

    expect(result.props.id).toBeDefined()
    expect(result.props.updatedAt).toBeDefined()
    expect(result.props.createdAt).toBeDefined()
    expect(result.props.name).toBe(props.name)
  })

  it("should correctly identify free plans", async () => {
    expect.assertions(2)

    const freePlanProps: ICreatePlanEntityProps = {
      name: "Free Plan",
      price: 0,
    }
    const freePlan = new PlanEntity(freePlanProps)

    const paidPlanProps: ICreatePlanEntityProps = {
      name: "Paid Plan",
      price: 9.99,
    }
    const paidPlan = new PlanEntity(paidPlanProps)

    expect(freePlan.isFreePlan()).toBe(true)
    expect(paidPlan.isFreePlan()).toBe(false)
  })
})
