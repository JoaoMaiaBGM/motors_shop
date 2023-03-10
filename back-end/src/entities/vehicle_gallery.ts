import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Vehicle } from "./vehicle";

@Entity()
export class VehicleGallery{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    image : string

    @ManyToOne(()=> Vehicle,(vehicle)=> vehicle.gallery)
    vehicle : Vehicle
}