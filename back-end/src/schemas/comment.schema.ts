import * as yup from "yup"

export const commentsSchema = yup.object({
   content : yup.string().required()
})
export const commentsSpecificSchema = yup.object({
    comment_id : yup.string().uuid().required()
 })
export const commentsUpdateSchema = yup.object({
    content : yup.string().optional()
})