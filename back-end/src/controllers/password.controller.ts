import { Request, Response } from "express";
import {
  resetUserPasswordService,
  sendResetUserPasswordService,
} from "../services/password.service";

export const sendResetUserPasswordController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const protocol = req.protocol;
  const host = req.get("host");

  await sendResetUserPasswordService(email, protocol, host);

  return res.status(200).json({
    message: "Token da alteração de senha enviado",
  });
};

export const resetUserPasswordController = async (
  req: Request,
  res: Response
) => {
  const { token } = req.params;
  const { password } = req.body;

  await resetUserPasswordService(token, password);

  return res.status(200).json({
    message: "Senha alterada com sucesso",
  });
};
