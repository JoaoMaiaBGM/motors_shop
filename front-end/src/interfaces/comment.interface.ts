import { IAnnouncement } from "./announcement.interface"
import { IProfile, IUserCreate } from "./user.interface"

export interface IComment{
    id : string
    content : string
    created_at : string
    updated_at : string
    user : IProfile,
    vehicle : IAnnouncement
}
export interface ICommentUpdate{
    content : string
}