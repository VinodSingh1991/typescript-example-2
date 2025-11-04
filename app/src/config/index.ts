import { DataSourceOptions } from "typeorm";
import { ObjectSchema } from "../db/entity/ObjectSchema";
import { CategorySchema } from "src/db/entity/CategorySchema";

export const config = {
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [ObjectSchema, CategorySchema],
    migrations: [],
    subscribers: [],
} as DataSourceOptions