import { AppError } from "../app.error";


export class NotFoundError extends AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 404) {
    super(message, statusCode);
  }
}