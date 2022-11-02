import { AppError } from "../app.error";


export class BadRequestError extends AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    super(message, statusCode);
  }
}