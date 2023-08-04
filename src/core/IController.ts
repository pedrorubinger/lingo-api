export interface IController<Request, Response> {
  handle(request: Request, response: Response): Promise<Response>
}
