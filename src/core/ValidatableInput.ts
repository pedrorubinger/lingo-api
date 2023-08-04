export class ValidatableInput<T extends Record<string, any>> {
  constructor(props: T) {
    Object.keys(props).map((key: keyof T) => {
      ;(this as any)[key] = props[key]
    })
  }
}
