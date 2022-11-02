import { Request, Response } from "express";
import { container } from "tsyringe";
import { SellerService } from "../services/seller.service";

class SellerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sellerService = container.resolve(SellerService)
    const result = await sellerService.execute()
    return response.status(200).json(result)
  }
}

export { SellerController }