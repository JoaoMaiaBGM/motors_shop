import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { User } from "./user";
import { Vehicle } from "./vehicle";

@Entity()
export class VehicleComments{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    content : string

    @ManyToOne(()=> Vehicle,(vehicle)=> vehicle.comments)
    vehicle : Vehicle

    @ManyToOne(()=> User,(user)=> user.comments)
    user : User

    @CreateDateColumn({type: "timestamp"})
    created_at : Date

    @UpdateDateColumn({type : "timestamp"})
    updated_at : Date
}