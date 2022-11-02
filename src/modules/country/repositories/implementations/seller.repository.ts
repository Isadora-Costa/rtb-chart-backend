import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { CountryEntity } from "../../../../database/entities/country.entity";
import { NotFoundError } from "../../../../errors/implementations/not-found.error";
import { ICountrySerializer } from "../../serializers/country.serializer";
import { ICountryRepository } from "../interfaces/country.interface";

class CountryRepository implements ICountryRepository {
  private countryRepoditory: Repository<CountryEntity>

  constructor() {
    this.countryRepoditory = AppDataSource.getRepository(CountryEntity)
  }

  async get(): Promise<ICountrySerializer[]> {
    const dataRecords: ICountrySerializer[] = []
    const sellers = await this.countryRepoditory.find()

    if (sellers.length == 0) throw new NotFoundError("Country table empty!")

    for (const seller of sellers) {
      dataRecords.push({
        id: seller.id,
        name: seller.name
      })
    }

    return dataRecords
  }
}

export { CountryRepository }