import { inject, injectable } from "tsyringe";
import { ICountryRepository } from "../repositories/interfaces/country.interface";
import { ICountrySerializer } from "../serializers/country.serializer";

@injectable()
class CountryService {
  constructor(
    @inject("CountryRepository")
    private countryRepository: ICountryRepository
  ) {}

  async execute(): Promise<ICountrySerializer[]> {
    return await this.countryRepository.get();
  }
}

export { CountryService }