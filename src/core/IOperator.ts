export interface IOperator<I, O> {
  exec(input: I): Promise<O>
}
