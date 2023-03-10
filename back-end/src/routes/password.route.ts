import { Router } from "express";
import {
  resetUserPasswordController,
  sendResetUserPasswordController,
} from "../controllers/password.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import {
  resetPasswordSchema,
  sendResetPasswordSchema,
} from "../schemas/password.schema";

const passwordRoute = Router();
const routeName = "/user/password";
const resetPasswordRouteName = "/user/resetpassword";

passwordRoute.post(
  routeName,
  schemaValidationMiddleware(sendResetPasswordSchema),
  sendResetUserPasswordController
);
passwordRoute.patch(
  resetPasswordRouteName + "/:token_reset_password",
  schemaValidationMiddleware(resetPasswordSchema),
  resetUserPasswordController
);

export default passwordRoute;
