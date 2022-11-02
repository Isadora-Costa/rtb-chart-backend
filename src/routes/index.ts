import { Router } from "express"
import { orderRoutes } from "./order.routes"
import { sellerRoutes } from "./seller.routes"

const router = Router()

router.use("/order", orderRoutes)
router.use("/seller", sellerRoutes)

export { router }
