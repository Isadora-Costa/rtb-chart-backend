import { inject, injectable } from "tsyringe";
import { ISellerRepository } from "../repositories/interfaces/seller.interface";
import { ISellerSerializer } from "../serializers/seller.serializer";

@injectable()
class SellerService {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) {}

  async execute(): Promise<ISellerSerializer> {
    return await this.sellerRepository.get();
  }
}

export { SellerService }