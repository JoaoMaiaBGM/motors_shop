import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Address } from "./address";
import { Vehicle } from "./vehicle";
import { VehicleComments } from "./vehicle_comments";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  accountType: "seller" | "buyer";

  @Column("varchar")
  full_name: string;

  @Column("varchar")
  email: string;

  @Column("varchar", { length: 11 })
  cpf: string;

  @Column("varchar", { length: 11 })
  phone: string;

  @Column("date")
  birthDate: Date;

  @Column("varchar", { nullable: true })
  description: string;

  @Exclude()
  @Column("varchar")
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @Column("boolean")
  isActive: boolean;

  @Column("varchar", { nullable: true })
  token_activation: string;

  @Column("varchar", { nullable: true })
  token_reset_password: string;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
  vehicles: Vehicle[];

  @JoinColumn()
  @OneToMany(() => VehicleComments, (vehicle_comments) => vehicle_comments.user)
  comments: VehicleComments[];
}
