import { inject, injectable } from "tsyringe";
import { ISellerRepository } from "../repositories/interfaces/seller.interface";
import { ITopSellerSerializer } from "../serializers/seller.serializer";

@injectable()
class TopSellerService {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) {}

  async execute(): Promise<ITopSellerSerializer[]> {
    return await this.sellerRepository.getTopsellers();
  }
}

export { TopSellerService }