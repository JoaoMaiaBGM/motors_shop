import * as yup from "yup";

export const sendResetPasswordSchema = yup.object({
  email: yup.string().email().required("Email é obrigatório"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(15, "Senha deve ter no máximo 15 caracteres")
    .matches(
      /^([a-zA-Z0-9@*#]{8,15})$/,
      "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    )
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(15, "Senha deve ter no máximo 15 caracteres")
    .matches(
      /^([a-zA-Z0-9@*#]{8,15})$/,
      "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    )
    .required("Senha é obrigatória"),
});
