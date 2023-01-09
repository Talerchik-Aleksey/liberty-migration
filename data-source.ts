import config from "config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

console.log(config.get<PostgresConnectionOptions>("db"));

const connectionOptions: DataSourceOptions = {
  ...config.get<PostgresConnectionOptions>("db"),
  synchronize: false,
  logging: false,
  migrations: ["./migrations/*.ts"],
  subscribers: [],
};

export const AppDataSource = new DataSource(connectionOptions);
