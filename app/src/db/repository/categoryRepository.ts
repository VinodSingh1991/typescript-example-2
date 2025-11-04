import { DataSource, DeepPartial, Repository } from "typeorm";
import { Service } from "src/di/container";
import { CategorySchema } from "../entity/CategorySchema";

@Service()
export class CategoryRepository extends Repository<CategorySchema> {
    constructor(dataSource: DataSource) {
        super(CategorySchema, dataSource?.manager);
    } 
    async createRecord(data: DeepPartial<CategorySchema>): Promise<CategorySchema> {
        const obj = this.create(data);
        return this.save(obj);
    }
    
    async findRecordById(id: string): Promise<CategorySchema | null> {
        return this.findOneBy({ id });
    }

    async findAllRecord(): Promise<CategorySchema[]> {
        return this.find();
    }
}