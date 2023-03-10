import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";
import { VehicleComments } from "./vehicle_comments";
import { VehicleGallery } from "./vehicle_gallery";

@Entity()
export class Vehicle{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    announcementType : "sale" | "auction"

    @Column("varchar")
    vehicleType : "car" | "motorcycle" 

    @Column("varchar")
    title : string

    @Column("numeric",{precision : 4})
    year : number

    @Column("numeric")
    km : number

    @Column("numeric",{scale : 2,precision : 12})
    price : number

    @Column("varchar",{nullable : true})
    description : string

    @Column("varchar")
    coverImage : string

    @CreateDateColumn({type: "timestamp"})
    created_at : Date

    @UpdateDateColumn({type : "timestamp"})
    updated_at : Date
    
    @Column("boolean",{default : true})
    isActive : boolean

    @OneToMany(()=> VehicleGallery,(gallery)=> gallery.vehicle)
    gallery : VehicleGallery[]

    @JoinColumn()
    @ManyToOne(()=> User,(user)=> user.vehicles)
    user : User

    @JoinColumn()
    @OneToMany(()=> VehicleComments,(VehicleComments)=> VehicleComments.vehicle )
    comments : VehicleComments[]
}
    
