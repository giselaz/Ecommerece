import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Variant extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.variants)
    product: Product;
    
    @Column()
    attribute:string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    quantity: number;

    @Column()
    description: string;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}
