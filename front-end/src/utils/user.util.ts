import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiProfile, apiUser } from "../api";
import { IProfile, IUserUpdate } from "../interfaces/user.interface";

export async function createUser(data: FieldValues) {
  const addressData = {
    cep: data.cep,
    state: data.state,
    city: data.city,
    street: data.street,
    number: data.number,
    complement: data.complement,
  };

  data.address = addressData;

  let responseCreate = { data: {} as FieldValues, message: "" as "success" | "error" };
  try {
    const response = await apiUser.post("", data);
    responseCreate.data = response.data;
    responseCreate.message = "success";
    return responseCreate;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseCreate.message = "error";
      return responseCreate;
    }
  }
}

export async function loginUser(data: FieldValues) {
  let responseLogin = { token: "", message: "" as "success" | "error" };
  try {
    const response = await apiUser.post("/login", data);
    responseLogin.token = response.data;
    responseLogin.message = "success";
    return responseLogin;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseLogin.message = "error";
      return responseLogin;
    }
  }
}

export async function updateUser(data: FieldValues) {
  let responseUpdate = {
    data: {} as IUserUpdate,
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
    const response = await apiUser.patch(``, validatedData,{headers : {Authorization : `Bearer ${token}`}});
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
export async function getSpecificUser(user_id : string){
  let responseSpecificGet = {data : {} as IProfile,message : "" as "success" | "error"}
  try{
      const token = localStorage.getItem("$TOKEN")
      const response = await apiUser.get(`/${user_id}`,{headers : {Authorization : `Bearer ${token}`}})
      responseSpecificGet.data = response.data
      responseSpecificGet.message = "success"
      return responseSpecificGet
  }
  catch(err){
      if(err instanceof AxiosError){
          responseSpecificGet.message = "error"
          responseSpecificGet.data = err.response?.data
          return responseSpecificGet
      }
  }
}
export async function getSpecificUserToken(){
  let responseSpecificGet = {data : {} as IProfile,message : "" as "success" | "error"}
  try{
      const token = localStorage.getItem("$TOKEN")
      const response = await apiProfile.get(``,{headers : {Authorization : `Bearer ${token}`}})
      responseSpecificGet.data = response.data
      responseSpecificGet.message = "success"
      return responseSpecificGet
  }
  catch(err){
      if(err instanceof AxiosError){
          responseSpecificGet.message = "error"
          responseSpecificGet.data = err.response?.data
          return responseSpecificGet
      }
  }
}