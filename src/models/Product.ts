import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany } from "typeorm";
import { Variant } from "./Variant";
@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    sku:string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Column({ nullable: true })
    description: string;

    @Column({ default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;

    @OneToMany(()=> Variant, variant=> variant.product)
    variants: Variant[];
}
