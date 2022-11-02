import { Router } from "express"
import { countryRoutes } from "./country.routes"
import { orderRoutes } from "./order.routes"
import { sellerRoutes } from "./seller.routes"

const router = Router()

router.use("/order", orderRoutes)
router.use("/seller", sellerRoutes)
router.use("/country", countryRoutes)

export { router }
