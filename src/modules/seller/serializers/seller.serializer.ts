interface ITopSellerSerializer {
  id: string,
  name: string,
  totalSaller: string
}

interface ISellerSerializer {
  id: string,
  name: string
}

export { ISellerSerializer, ITopSellerSerializer }