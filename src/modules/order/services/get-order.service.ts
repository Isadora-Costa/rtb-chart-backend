import { inject, injectable } from "tsyringe";
import { IGetOrderDTO, IOrderRepository } from "../repositories/interfaces/order.interface";
import { IOrderSerializer } from "../serializers/order.serializer";

@injectable()
class GetOrderService {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository
  ) {}

  async execute(getOrderDTO: IGetOrderDTO): Promise<IOrderSerializer> {
    return await this.orderRepository.get(getOrderDTO)
  }
}

export { GetOrderService }