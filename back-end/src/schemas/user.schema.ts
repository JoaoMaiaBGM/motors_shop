import * as yup from "yup";
import { addressSchema } from "./address.schema";

export const userRegisterSchema = yup.object().shape({
  full_name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  cpf: yup
    .string()
    .length(11, "CPF deve ter 11 números")
    .required("Campo obrigatório"),
  phone: yup
    .string()
    .length(10, "Telefone deve ter 10 números")
    .required("Campo obrigatório"),
  birthDate: yup.date().required("Data de nascimento obrigatória"),
  description: yup.string(),
  accountType: yup
    .string()
    .oneOf(
      ["seller", "buyer"],
      "Tipos de usuário: seller(vendedor), buyer(comprador)"
    )
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(15, "Senha deve ter no máximo 15 caracteres")
    .matches(
      /^([a-zA-Z0-9@*#]{8,15})$/,
      "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    )
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha não confere")
    .required("Confirme sua senha"),
  address: addressSchema,
});

export const userSchema = yup.object({
  accounType: yup
    .string()
    .oneOf(
      ["seller", "buyer"],
      "Tipos de conta: seller(anunciante), buyer(comprador)"
    )
    .required("O tipo de conta é obrigatório"),
  full_name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email().required("O email é obrigatório"),
  cpf: yup.number().required("O cpf é obrigatório"),
  phone: yup.number().required("O telefone é obrigatória"),
  birthDate: yup.date().required("A data do nascimento é obrigatório"),
  description: yup.string().notRequired(),
});
export const userUpdateSchema = yup.object({
  accountType: yup
    .string()
    .oneOf(
      ["seller", "buyer"],
      "Tipos de conta: seller(anunciante), buyer(comprador)"
    )
    .optional(),
  full_name: yup.string().optional(),
  email: yup.string().email().optional(),
  cpf: yup.number().optional(),
  phone: yup.number().optional(),
  birthDate: yup.date().optional(),
  description: yup.string().optional(),
  address : yup.object().shape({
    cep : yup.string().optional(),
    state : yup.string().optional(),
    city : yup.string().optional(),
    street : yup.string().optional(),
    number : yup.number().optional(),
    complement: yup.string().optional(),
})
});
