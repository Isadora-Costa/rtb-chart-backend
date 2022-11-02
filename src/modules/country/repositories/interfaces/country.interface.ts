import { ICountrySerializer } from "../../serializers/country.serializer"


interface ICountryRepository {
  get(): Promise<ICountrySerializer[]>
}

export { ICountryRepository }