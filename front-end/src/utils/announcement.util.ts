import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiAnnouncement } from "../api";
import { IAnnouncement } from "../interfaces/announcement.interface";

export async function createAnnouncement(data : FieldValues ){
    let responseCreate = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiAnnouncement.post("",data,{headers : {Authorization : `Bearer ${token}`}})
        responseCreate.data = response.data
        responseCreate.message = "success"
        return responseCreate
    }
    catch(err){
        if(err instanceof AxiosError){
            responseCreate.message = "error"
            return responseCreate
        }
    }
}
export async function getAnnouncementUser(id : string){
    let responseGet = {data : [{}] as IAnnouncement[],message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiAnnouncement.get(`/user/${id}`,{headers : {Authorization : `Bearer ${token}`}})
        responseGet.data = response.data
        responseGet.message = "success"
        return responseGet
    }
    catch(err){
        if(err instanceof AxiosError){
            responseGet.message = "error"
            return responseGet
        }
    }
}
export async function getSpecificAnnouncement(id : string){
    let responseSpecificGet = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiAnnouncement.get(`/${id}`,{headers : {Authorization : `Bearer ${token}`}})
        responseSpecificGet.data = response.data
        responseSpecificGet.message = "success"
        return responseSpecificGet
    }
    catch(err){
        if(err instanceof AxiosError){
            responseSpecificGet.message = "error"
            return responseSpecificGet
        }
    }
}
export async function updateAnnouncement(data : FieldValues,id : string){
    let responseUpdate = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        let validatedData = {} as FieldValues
        for (const key in data){
            if(data[key]){
                validatedData[key] = data[key]
            }
        }
        const token = localStorage.getItem("$TOKEN")
        const response = await apiAnnouncement.patch(`/${id}`,validatedData,{headers : {Authorization : `Bearer ${token}`}})
        responseUpdate.data = response.data
        responseUpdate.message = "success"
        return responseUpdate
    }
    catch(err){
        if(err instanceof AxiosError){
            responseUpdate.message = "error"
            return responseUpdate
        }
    }
}
export async function deleteAnnouncement(id : string){
    let responseDelete = {message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiAnnouncement.delete(`/${id}`,{headers : {Authorization : `Bearer ${token}`}})
        responseDelete.message = "success"
        return responseDelete
    }
    catch(err){
        if(err instanceof AxiosError){
            responseDelete.message = "error"
            return responseDelete
        }
    }
}