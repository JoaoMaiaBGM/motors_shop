import * as yup from "yup"
import { userSchema } from "./user.schema"

export const announcementSchema = yup.object({
    announcementType : yup.string().oneOf(["sale","auction"],"Tipos de anúncio: sale(venda), auction(leilão)").required("O tipo de anúncio é obrigatório"),
    vehicleType : yup.string().oneOf(["car","motorcycle"],"Tipos de veículo: car(carro), motorcycle(moto)").required("O tipo de veículo é obrigatório"),
    title : yup.string().required("O título do anúncio é obrigatório"),
    year : yup.number().required("O ano do veículo é obrigatório"),
    km : yup.number().required("A quilometragem do veículo é obrigatória"),
    price : yup.number().required("O preço do veículo é obrigatório"),
    description: yup.string().notRequired(),
    coverImage : yup.string().url().required("A imagem de fundo do anúncio é obrigatória"),
})
export const announcementUpdateSchema = yup.object({
    announcementType : yup.string().oneOf(["sale","auction"],"Tipos de anúncio: sale(venda), auction(leilão)").optional(),
    vehicleType : yup.string().oneOf(["car","motorcycle"],"Tipos de veículo: car(carro), motorcycle(moto)").optional(),
    title : yup.string().optional(),
    year : yup.number().optional(),
    km : yup.number().optional(),
    price : yup.number().optional(),
    description: yup.string().optional(),
    coverImage : yup.string().url().optional(),
})