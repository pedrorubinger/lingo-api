import { randomUUID } from "crypto"

import { IIdService } from "@/application/services"
import { ICreateIdOutput } from "@/application/services/id/dtos"

export class IdService implements IIdService {
  constructor() {}

  public static create(): ICreateIdOutput {
    return { id: randomUUID() }
  }
}
