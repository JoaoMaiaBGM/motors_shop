import * as yup from "yup"

export const addressCreateSchema = yup.object().shape({
  cep: yup
    .number()
    .min(8, "CEP deve ter 8 dígitos")
    .required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
});


export const addressUpdateSchema = yup.object().shape({
    cep: yup
    .string().test({test : (value =>{
      if(value){
        if(value.length < 8){
          return false
        }
      }
      return true
    }),message : "CEP deve ter 8 dígitos"}),
  state: yup.string().optional(),
  city: yup.string().optional(),
  street: yup.string().optional(),
  number: yup.number()
  .optional()
  .transform((value) =>
    isNaN(value) || value === null || value === undefined ? undefined : value
  ),
  complement: yup.string().optional(),
})