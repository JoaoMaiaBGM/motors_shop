import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email : yup.string().required("O email é obrigatório"),
    password : yup.string().required("A senha é obrigatória")
})

export const userSchema = yup.object().shape({
    accountType : yup.string().oneOf(["seller","buyer"],"Tipos de conta: seller(anunciante), buyer(comprador)").required("O tipo de conta é obrigatório"),
    full_name : yup.string().required("O nome é obrigatório"),
    email : yup.string().email().required("O email é obrigatório").typeError("Digite um email válido"),
    cpf : yup.number().required("O cpf é obrigatório").typeError("Digite um cpf válido"),
    phone : yup.number().required("O telefone é obrigatório").typeError("Digite um telefone válido"),
    birthDate : yup.date().required("A data do nascimento é obrigatório").typeError("Digite um ano válido"),
    description: yup.string().notRequired(),
})
export const userUpdateSchema = yup.object().shape({
    accountType : yup.string().oneOf(["seller","buyer"],"Tipos de conta: seller(anunciante), buyer(comprador)").optional(),
    full_name : yup.string().optional(),
    email : yup.string().email().optional(),
    cpf : yup.number().optional().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value),
    phone : yup.number().optional().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value),
    birthDate : yup.date().optional(),
    description: yup.string().optional(),
})