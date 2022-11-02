import { Router } from 'express'
import { SellerController } from '../modules/seller/controllers/seller.controller'
import { TopSellerController } from '../modules/seller/controllers/top-seller.controller'

const sellerRoutes = Router()
const sellerController = new SellerController()
const topSellerController = new TopSellerController()

sellerRoutes.get(
  "/", 
  sellerController.handle
)

sellerRoutes.get(
  "/top-seller",
  topSellerController.handle
)

export { sellerRoutes }
