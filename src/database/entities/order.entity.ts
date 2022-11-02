import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CountryEntity } from "./country.entity";
import { SellerEntity } from "./seller.entity";

@Entity({
  name: "order",
  synchronize: false
})
class OrderEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string

  @Column({
    unique: true
  })
  product: string

  @ManyToOne(() => SellerEntity, seller => seller.id)
  seller: SellerEntity

  @ManyToOne(() => CountryEntity, country => country.id)
  country: CountryEntity

  @Column({
    name: 'price'
  })
  price: number

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}

export { OrderEntity }