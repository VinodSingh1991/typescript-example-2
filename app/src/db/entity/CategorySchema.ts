import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectSchema } from "./ObjectSchema";

@Entity()
export class CategorySchema {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    categoryName: string;

    @Column()
    categoryType: string;

    @Column()
    categoryDescription: string;

    @Column()
    categoryIcon: string;

    @Column()
    categoryColor: string;

    @Column()
    objectId: number;

    @ManyToOne(() => ObjectSchema)
    @JoinColumn({ name: 'objectId' })
    object: ObjectSchema;
}