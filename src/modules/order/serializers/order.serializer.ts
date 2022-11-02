interface IOrderSerializer {
  data: IDataSerializer[],
  meta: IMetaSerializer
}

interface IDataSerializer {
  id: string
  product: string,
  sellerId: string,
  sellerName: string,
  countryId: string,
  countryName: string,
  price: number
}

interface IMetaSerializer {
  beforeCursor: string,
  afterCursor: string,
  count: number,
  limit: number
}

export { IOrderSerializer, IMetaSerializer, IDataSerializer }