import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountryService } from "../services/country.service";

class CountryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const countryService = container.resolve(CountryService)
    const result = await countryService.execute()
    return response.status(200).json(result)
  }
}

export { CountryController }