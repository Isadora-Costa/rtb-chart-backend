import { Router, Request, Response, NextFunction } from 'express'
import { checkSchema, validationResult } from 'express-validator'
import { GetOrderController } from '../modules/order/controllers/get-order.controller'
import { getOrderSchema } from '../modules/order/dtos/get-order.schema'

const orderRoutes = Router()
const getOrderController = new GetOrderController()

orderRoutes.get(
  "/", 
  checkSchema(getOrderSchema),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    next()
  },
  getOrderController.handle
)

export { orderRoutes }
