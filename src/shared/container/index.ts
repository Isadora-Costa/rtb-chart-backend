import { container } from "tsyringe"
import { OrderRepository } from "../../modules/order/repositories/implementations/order.repository"
import { IOrderRepository } from "../../modules/order/repositories/interfaces/order.interface"
import { SellerRepository } from "../../modules/seller/repositories/implementations/seller.repository"
import { ISellerRepository } from "../../modules/seller/repositories/interfaces/seller.interface"

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
)

container.registerSingleton<ISellerRepository>(
  "SellerRepository",
  SellerRepository
)