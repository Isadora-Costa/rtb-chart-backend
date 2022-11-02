import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: "seller",
  synchronize: false
})
class SellerEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string

  @Column({
    unique: true
  })
  name: string

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}

export { SellerEntity }