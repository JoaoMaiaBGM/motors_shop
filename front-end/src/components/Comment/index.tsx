import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import AvatarIcon from "../AvatarIcon";
import { EditComment } from "../EditComment";
import {Text} from "../Text"

interface ICommentProps{
    id : string
    content : string
    date : string
    user_id : string
}

export function Comment(props : ICommentProps){

    const [isEditable,setIsEditable] = useState(false)

    
    return(
        <Box mt={"1rem"}>
            <AvatarIcon comment_id={props.id} width="100%" setIsEditable={setIsEditable} user_id={props.user_id} dateComment={props.date} comment={"list"} size="small"></AvatarIcon>
            {isEditable ? <EditComment setIsEditable={setIsEditable} id={props.id}></EditComment> : <Text mt="1rem" variant="car-description" text={props.content}></Text>}
        </Box>
    )
}