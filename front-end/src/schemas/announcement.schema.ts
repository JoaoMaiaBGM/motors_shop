import * as yup from "yup";

export const announcementSchema = yup.object().shape({
  announcementType: yup
    .string()
    .oneOf(
      ["sale", "auction"],
      "Tipos de anúncio: sale(venda), auction(leilão)"
    )
    .required("O tipo de anúncio é obrigatório"),
  vehicleType: yup
    .string()
    .oneOf(
      ["car", "motorcycle"],
      "Tipos de veículo: car(carro), motorcycle(moto)"
    )
    .required("O tipo de veículo é obrigatório"),
  title: yup.string().required("O título do anúncio é obrigatório"),
  year: yup
    .number()
    .required("O ano do veículo é obrigatório")
    .typeError("Digite um ano válido")
    .test({
      message: "Digite um ano válido",
      test: (value: number) => {
        const valueString = String(value);
        const year = new Date().getFullYear();
        if (valueString.length < 4 || valueString.length > 4) {
          return false;
        }
        if (value > year) {
          return false;
        }
        return true;
      },
    }),
  km: yup
    .number()
    .required("A quilometragem do veículo é obrigatória")
    .typeError("Digite um valor válido"),
  price: yup
    .number()
    .required("O valor do veículo é obrigatório")
    .typeError("Digite um valor válido"),
  description: yup.string().notRequired(),
  coverImage: yup
    .string()
    .url("Digite uma url válida")
    .required("A imagem de fundo do anúncio é obrigatória"),
});
export const announcementUpdateSchema = yup.object().shape({
  announcementType: yup
    .string()
    .oneOf(
      ["sale", "auction"],
      "Tipos de anúncio: sale(venda), auction(leilão)"
    )
    .optional(),
  vehicleType: yup
    .string()
    .oneOf(
      ["car", "motorcycle"],
      "Tipos de veículo: car(carro), motorcycle(moto)"
    )
    .optional(),
  title: yup.string().optional(),
  year: yup
    .number()
    .optional()
    .test({
      message: "Digite um ano válido",
      test: (value) => {
        if (value) {
          const valueString = String(value);
          const year = new Date().getFullYear();
          if (valueString.length < 4 || valueString.length > 4) {
            return false;
          }
          if (value > year) {
            return false;
          }
          return true;
        }
        return true;
      },
    })
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
  km: yup
    .number()
    .optional()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
  price: yup
    .number()
    .optional()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
  description: yup.string().optional(),
  coverImage: yup.string().url("Digite uma url válida").optional(),
});
