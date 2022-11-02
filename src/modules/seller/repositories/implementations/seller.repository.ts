import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { SellerEntity } from "../../../../database/entities/seller.entity";
import { NotFoundError } from "../../../../errors/implementations/not-found.error";
import { ISellerRepository } from "../interfaces/seller.interface";
import { ISellerSerializer, ITopSellerSerializer } from "../../serializers/seller.serializer";

class SellerRepository implements ISellerRepository {
  private sellerRepoditory: Repository<SellerEntity>

  constructor() {
    this.sellerRepoditory = AppDataSource.getRepository(SellerEntity)
  }

  async get(): Promise<ISellerSerializer[]> {
    const dataRecords: ISellerSerializer[] = []
    const sellers = await this.sellerRepoditory.find()

    if (sellers.length == 0) throw new NotFoundError("Seller table empty!")

    for (const seller of sellers) {
      dataRecords.push({
        id: seller.id,
        name: seller.name
      })
    }

    return dataRecords
  }

  async getTopsellers(): Promise<ITopSellerSerializer[]> {
    const dataRecords: ITopSellerSerializer[] = []
    const query = `
      SELECT
        s.id as id,
        s.name as name,
        SUM(o.price) as totalSeller
      FROM
        "order" o
      LEFT JOIN seller s on s.id = o.sellerId
      GROUP  BY s.name
      ORDER BY totalSeller DESC
      LIMIT 3
    `

    const topSellers = await this.sellerRepoditory.query(query)

    if (topSellers.length == 0) throw new NotFoundError("Seller table empty!")

    for (const seller of topSellers) {
      dataRecords.push({
        id: seller.id,
        name: seller.name,
        totalSeller: new Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(seller.totalSeller)
      })
    }

    return dataRecords
  }
}

export { SellerRepository }