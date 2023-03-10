import { Box } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CommentsContext } from "../../contexts/comments.context";
import {commentUpdateSchema } from "../../schemas/comment.schema";
import { updateComment } from "../../utils/comment.util";
import AvatarProfile from "../AvatarProfile";
import { TextArea } from "../TextArea";

interface IEditComment{
    id : string
    setIsEditable : Dispatch<SetStateAction<boolean>>
}

export function EditComment(props : IEditComment){

    const {register,handleSubmit} = useForm({resolver : yupResolver(commentUpdateSchema)})
    const {setComments,comments} = useContext(CommentsContext)

    return(
        <Box mb={"1rem"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} padding={"1rem"}>
            <form onSubmit={handleSubmit(async(data)=>{
                const response = await updateComment(data,props.id)
                if(response?.message == "success"){
                    setComments((oldComments)=>{
                        const copyComments = [...oldComments]
                        const findComment = copyComments.findIndex((el)=> el.id == response.data.id)
                        copyComments.splice(findComment,1,response.data)
                        return copyComments
                    })
                    props.setIsEditable(false)
                }
            })}>
                <TextArea buttonText="Editar" register={{...register("content")}} comment={true} placeholder="Digite seu comentario" text=""></TextArea>
            </form>
        </Box>
    )
}