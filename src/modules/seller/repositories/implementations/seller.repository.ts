import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { SellerEntity } from "../../../../database/entities/seller.entity";
import { NotFoundError } from "../../../../errors/implementations/not-found.error";
import { ISellerRepository } from "../interfaces/seller.interface";
import { ISellerSerializer } from "../../serializers/seller.serializer";

class SellerRepository implements ISellerRepository {
  private sellerRepoditory: Repository<SellerEntity>

  constructor() {
    this.sellerRepoditory = AppDataSource.getRepository(SellerEntity)
  }

  async get(): Promise<ISellerSerializer[]> {
    const dataRecords: ISellerSerializer[] = []
    const query = `
      SELECT
        s.id as id,
        s.name as name,
        SUM(o.price) as totalSaller
      FROM
        "order" o
      LEFT JOIN seller s on s.id = o.sellerId
      GROUP  BY s.name
      ORDER BY totalSaller DESC
      LIMIT 3
    `

    const topSellers = await this.sellerRepoditory.query(query)

    if (topSellers.length == 0) throw new NotFoundError("Table empty!")

    for (const seller of topSellers) {
      dataRecords.push({
        id: seller.id,
        name: seller.name,
        totalSaller: new Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(seller.totalSaller)
      })
    }

    return dataRecords
  }
}

export { SellerRepository }