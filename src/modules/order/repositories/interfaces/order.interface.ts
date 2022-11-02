import { IGetOrderDTO } from "../../dtos/get-order.dto";
import { IOrderSerializer } from "../../serializers/order.serializer";

interface IOrderRepository {
  get(getOrderDTO: IGetOrderDTO): Promise<IOrderSerializer>
}

export { IGetOrderDTO, IOrderRepository }