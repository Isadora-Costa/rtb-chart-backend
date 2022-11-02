import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  logging: true,
  synchronize: false,
  database: "src/database/datafile/rtbdata.sqlite",
  entities: ["src/database/entities/**.ts"],
  migrations: ["src/database/migrations/**.ts"],
});