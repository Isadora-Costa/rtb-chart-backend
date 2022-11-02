import { Router } from 'express'
import { SellerController } from '../modules/seller/controllers/seller.controller'

const sellerRoutes = Router()
const sellerController = new SellerController()

sellerRoutes.get(
  "/", 
  sellerController.handle
)

export { sellerRoutes }
