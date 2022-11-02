import { Repository } from "typeorm";
import { buildPaginator } from "typeorm-cursor-pagination"
import { IDataSerializer, IOrderSerializer } from "../../serializers/order.serializer";
import { IGetOrderDTO, IOrderRepository } from "../interfaces/order.interface";
import { AppDataSource } from "../../../../database/data-source";
import { OrderEntity } from "../../../../database/entities/order.entity";

class OrderRepository implements IOrderRepository {
  private orderRepository: Repository<OrderEntity>

  constructor() {
    this.orderRepository = AppDataSource.getRepository(OrderEntity)
  }

  async get(getOrderDTO: IGetOrderDTO): Promise<IOrderSerializer> {
    const dataRecords: IDataSerializer[] = []

    if (!getOrderDTO.limit) {
      getOrderDTO.limit = 4
    }

    let queryBuilder = this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.seller', 'seller')
      .leftJoinAndSelect('order.country', 'country')
    
    if (getOrderDTO.country && getOrderDTO.seller) {
      queryBuilder
        .where('order.sellerId = :id_seller', {id_seller: getOrderDTO.seller})
        .andWhere('order.countryId = :id_country', {id_country: getOrderDTO.country})
    } else {
      if (getOrderDTO.seller) {
        queryBuilder.where('order.sellerId = :id', {id: getOrderDTO.seller})
      }
  
      if (getOrderDTO.country)  {
        queryBuilder.where('order.countryId = :id', {id: getOrderDTO.country})
      }
    }

    const paginator = buildPaginator({
      entity: OrderEntity,
      alias: 'order',
      paginationKeys: ['product'],
      query: {
        limit: getOrderDTO.limit,
        order: 'ASC',
        afterCursor: getOrderDTO?.after ? getOrderDTO?.after : null,
        beforeCursor: getOrderDTO?.before ? getOrderDTO?.before : null
      }
    })

    const { data, cursor } = await paginator.paginate(queryBuilder)

    for (const record of data) {
      dataRecords.push({
        id: record.id,
        product: record.product,
        price: record.price,
        sellerId: record.seller.id,
        sellerName: record.seller.name,
        countryId: record.country.id,
        countryName: record.country.name,
      })     
    }
    
    return {
      data: dataRecords,
      meta: {
        afterCursor: cursor.afterCursor,
        beforeCursor: cursor.beforeCursor,
        count: dataRecords.length,
        limit: 4
      }
    }
  }
}

export { OrderRepository }