import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 8 })
  cep: string;

  @Column("varchar")
  state: string;

  @Column("varchar")
  city: string;

  @Column("varchar")
  street: string;

  @Column("integer")
  number: number;

  @Column("varchar")
  complement: string;
}
