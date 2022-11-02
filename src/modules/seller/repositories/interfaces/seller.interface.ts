import { ISellerSerializer, ITopSellerSerializer } from "../../serializers/seller.serializer"


interface ISellerRepository {
  getTopsellers(): Promise<ITopSellerSerializer[]>
  get(): Promise<ISellerSerializer[]>
}

export { ISellerRepository }