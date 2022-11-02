interface ITopSellerSerializer {
  id: string,
  name: string,
  totalSeller: string
}

interface ISellerSerializer {
  id: string,
  name: string
}

export { ISellerSerializer, ITopSellerSerializer }