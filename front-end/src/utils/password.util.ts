import { FieldValues } from "react-hook-form";
import { AxiosError } from "axios";
import { apiUser } from "../api";
import {
  IResetPassword,
  ISendResetPassword,
} from "../interfaces/password.interface";

export async function sendResetPasswordToken(data: FieldValues) {
  let responseResetPassword = {
    data: {} as ISendResetPassword,
    message: "" as "success" | "error",
  };
  try {
    const response = await apiUser.post("/password", data);
    responseResetPassword.data = response.data;
    responseResetPassword.message = "success";
    return responseResetPassword;
  } catch (error) {
    if (error instanceof AxiosError) {
      responseResetPassword.message = "error";
      return responseResetPassword;
    }
  }
}

export async function resetPassword(
  data: FieldValues,
  token_reset_password: string
) {
  let resetPasswordResponse = {
    data: {} as IResetPassword,
    message: "" as "success" | "error",
  };
  try {
    const response = await apiUser.patch(
      `/resetpassword/${token_reset_password}`,
      data
    );
    resetPasswordResponse.data = response.data;
    resetPasswordResponse.message = "success";
    return resetPasswordResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      resetPasswordResponse.message = "error";
      return resetPasswordResponse;
    }
  }
}
