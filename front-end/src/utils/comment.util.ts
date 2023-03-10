import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiComment } from "../api";
import { IComment, ICommentUpdate } from "../interfaces/comment.interface";

export async function createComment(data : FieldValues,id_vehicle : string){
    let responseCreate = {data : {} as IComment,message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiComment.post(`/${id_vehicle}`,data,{headers : {Authorization : `Bearer ${token}`}})
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
export async function getCommentsVehicle(id_vehicle : string){
    let responseGet = {data : [{} as IComment],message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiComment.get(`/vehicle/${id_vehicle}`,{headers : {Authorization : `Bearer ${token}`}})
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
export async function updateComment(data: FieldValues,id_comment: string) {
    let responseUpdate = {
      data: {} as IComment,
      message: "" as "success" | "error",
    };
    try {
      let validatedData = {} as FieldValues;
      for (const key in data) {
        if (data[key]) {
          validatedData[key] = data[key];
        }
      }
      const token = localStorage.getItem("$TOKEN")
      const response = await apiComment.patch(`/${id_comment}`, validatedData,{headers : {Authorization : `Bearer ${token}`}});
      responseUpdate.data = response.data;
      responseUpdate.message = "success";
      return responseUpdate;
    } catch (err) {
      if (err instanceof AxiosError) {
        responseUpdate.message = "error";
        return responseUpdate;
      }
    }
  }
  export async function DeleteComment(id_comment : string) {
      let responseDelete = {message : ""}
    try{
      const token = localStorage.getItem("$TOKEN")
      const response = await apiComment.delete(`/${id_comment}`,{headers : {Authorization : `Bearer ${token}`}});
      console.log(response)
      responseDelete.message = "success";
      return responseDelete;
    } catch (err) {
      if (err instanceof AxiosError) {
        responseDelete.message = "error";
        return responseDelete;
      }
    }
  }