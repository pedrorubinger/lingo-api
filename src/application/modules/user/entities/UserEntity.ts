import { IdService } from "@/infra/services"
import { createEntityDateProps } from "@/shared/helpers"

export enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export enum UserStatus {
  DEBIT = "debt",
  ACTIVE = "active",
  INACTIVE = "inactive",
  ANALYSIS = "analysis",
}

export interface IUserEntityProps {
  id: string
  name: string
  email: string
  birthdate: Date
  role: UserRole
  status: UserStatus
  planId?: string | null
  createdAt: Date
  updatedAt: Date
}

export type ICreateUserEntityProps = Omit<
  IUserEntityProps,
  "id" | "createdAt" | "updatedAt"
>

export class UserEntity {
  public readonly props: IUserEntityProps

  constructor(props: ICreateUserEntityProps) {
    this.props = UserEntity.create(props)
  }

  public static create(props: ICreateUserEntityProps): IUserEntityProps {
    const { id } = IdService.create()
    const { createdAt, updatedAt } = createEntityDateProps()

    return { ...props, id, createdAt, updatedAt }
  }

  public isUnderAge(): boolean {
    const birthdate = new Date(this.props.birthdate)
    const today = new Date()
    const age = today.getFullYear() - birthdate.getFullYear()
    const monthDiff = today.getMonth() - birthdate.getMonth()

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      return age - 1 < 18
    }

    return age < 18
  }
}
