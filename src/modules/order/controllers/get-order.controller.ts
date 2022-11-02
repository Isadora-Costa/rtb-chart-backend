import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetOrderService } from "../services/get-order.service";

class GetOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getOrderService = container.resolve(GetOrderService)
    const result = await getOrderService.execute(request.query)
    return response.status(200).json(result)
  }
}

export { GetOrderController }