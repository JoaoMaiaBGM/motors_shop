import * as yup from "yup"

export const commentSchema = yup.object({
   content : yup.string().required()
})
export const commentUpdateSchema = yup.object({
   content : yup.string().optional()
})