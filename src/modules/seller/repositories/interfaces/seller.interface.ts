import { ISellerSerializer } from "../../serializers/seller.serializer"


interface ISellerRepository {
  get(): Promise<ISellerSerializer[]>
}

export { ISellerRepository }