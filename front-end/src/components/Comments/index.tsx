import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentsContext } from "../../contexts/comments.context";
import { getCommentsVehicle } from "../../utils/comment.util";
import { Comment } from "../Comment";
import { CreateComment } from "../CreateComment";
import {Text} from "../Text"

export function Comments(){

    const {vehicle_id} = useParams()
    const {comments,setComments} = useContext(CommentsContext)
    

    useEffect(()=>{
        async function listComments(){
            const response = await getCommentsVehicle(vehicle_id as string)
            if(response?.message == "success"){
                setComments(response.data)
            }
        }
        listComments()
    },[])
    
    return(
        <>
            <Box height={"max-content"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                <Text text="Comentários" variant="title-card"></Text>
                {comments.length > 0 ? comments.map((el)=>{
                    return <Comment id={el.id} user_id={el.user.id} content={el.content} date={el.created_at} key={el.id}></Comment>
                }) : <Text textAlign="center" text="Ninguém comentou" variant="title-card"></Text>}
            </Box>
            <CreateComment></CreateComment>
        </>
    )
}