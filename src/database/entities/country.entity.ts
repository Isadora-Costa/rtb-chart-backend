import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: "country",
  synchronize: false
})
class CountryEntity {
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

export { CountryEntity }