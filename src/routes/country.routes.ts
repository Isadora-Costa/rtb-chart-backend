import { Router } from 'express'
import { CountryController } from '../modules/country/controllers/country.controller'

const countryRoutes = Router()
const countryController = new CountryController

countryRoutes.get(
  "/",
  countryController.handle
)

export { countryRoutes }
