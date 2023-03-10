export interface IAnnouncement{

    type : "sale" | "auction"
    vehicleType : "car" | "motorcycle" 
    title : string
    year : number
    km : number
    price : number
    description?: string
    coverImage : string
}