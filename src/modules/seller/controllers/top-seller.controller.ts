import { Request, Response } from "express";
import { container } from "tsyringe";
import { TopSellerService } from "../services/top-seller.service";

class TopSellerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const topSellerService = container.resolve(TopSellerService)
    const result = await topSellerService.execute()
    return response.status(200).json(result)
  }
}

export { TopSellerController }