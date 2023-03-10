import * as yup from "yup"

export const addressSchema = yup.object().shape({
    cep: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.number().required("Campo obrigatório"),
    complement: yup.string().required("Campo obrigatório"),
  });