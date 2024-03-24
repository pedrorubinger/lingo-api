import { IdService } from "@/infra/services"
import { createEntityDateProps } from "@/shared/helpers"

export interface IPlanEntityProps {
  id: string
  name: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export type ICreatePlanEntityProps = Omit<
  IPlanEntityProps,
  "id" | "createdAt" | "updatedAt"
>

export class PlanEntity {
  public readonly props: IPlanEntityProps

  constructor(props: ICreatePlanEntityProps) {
    this.props = PlanEntity.create(props)
  }

  public static create(props: ICreatePlanEntityProps): IPlanEntityProps {
    const { id } = IdService.create()
    const { createdAt, updatedAt } = createEntityDateProps()

    return { ...props, id, createdAt, updatedAt }
  }

  public isFreePlan(): boolean {
    return this.props.price === 0
  }
}
