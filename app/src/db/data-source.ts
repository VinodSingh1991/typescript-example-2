import "reflect-metadata"
import { Container } from "src/di/container";
import { DataSource, DataSourceOptions } from "typeorm"

export class DatabaseConnection {
    private config: DataSourceOptions;
    private instance: DataSource;

    constructor(config: DataSourceOptions) {
        const __config = this.getConfig(config);
        this.instance = new DataSource(__config);
        Container.set(DataSource, this.instance);
    }



    async initialize(): Promise<void> {

        if (this.instance.isInitialized) {
            console.log("Database connection is already initialized.");
            return;
        }

        try {
            await this.instance.initialize();
            console.log("Database connection established successfully.");
        } catch (error) {
            console.error("Error during database connection initialization:", error);
        }
    }

    private getConfig(config: DataSourceOptions): DataSourceOptions {

        if (!config.database) {
            throw new Error("Database must be provided in the configuration.");
        }

        const _config = {
            type: config.type,
            database: config.database,
            synchronize: config.synchronize ?? true,
            logging: config.logging ?? false,
            entities: config.entities || [],
            migrations: config.migrations || [],
            subscribers: []
        } as DataSourceOptions;

        return _config;

    }

    getDataSource(): DataSource {
        if (!this.instance) {
            throw new Error("Database connection is not initialized.");
        }
        return this.instance;
    }

    public async close(): Promise<void> {
        if (this.instance && this.instance.isInitialized) {
            await this.instance.destroy();
            console.log("Database connection closed successfully.");
        }
    }

    public async reset(): Promise<void> {
        await this.close();
        this.instance = await new DataSource({} as DataSourceOptions).initialize();
    }
}