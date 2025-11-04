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
    
    async findRecordById(id: number): Promise<CategorySchema | null> {
        return this.findOneBy({ categoryId: id });
    }

    async findAllRecord(): Promise<CategorySchema[]> {
        return this.find();
    }

    async updateRecordById(id: number, data: DeepPartial<CategorySchema>): Promise<void> {
        await this.update(id, data);
    }   

    async deleteRecordById(id: number): Promise<void> {
        await this.delete(id);
    }
}