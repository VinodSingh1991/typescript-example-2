import { ObjectSchema } from "../entity/ObjectSchema";
import { Service } from "src/di/container";
import { ObjectItemBuilder } from "../json/objects_json";

@Service()
export class ObjectRepository {
    private dbRepository: ObjectSchema[] = new ObjectItemBuilder().getObjectsJson();
    constructor() {
        this.dbRepository = new ObjectItemBuilder().getObjectsJson();
    }

    async findRecordById(id: string): Promise<ObjectSchema | null> {
        return this.dbRepository.find(obj => obj.objectId === id) || null;
    }

    async findAllRecord(): Promise<ObjectSchema[]> {
        return this.dbRepository;
    }
}