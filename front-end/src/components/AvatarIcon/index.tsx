import { Box, Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { IProfile } from "../../interfaces/user.interface";
import { getSpecificUser } from "../../utils/user.util";
import {BiMessageAltEdit} from "react-icons/bi"
import { AiFillDelete} from "react-icons/ai"

import { Text } from "../Text";
import { AvatarStyled } from "./style";
import { ProfileContext } from "../../contexts/profile.context";
import { useLocation, useParams } from "react-router-dom";
import { DeleteComment } from "../../utils/comment.util";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { CommentsContext } from "../../contexts/comments.context";

export interface IAvatarProps {
  width?: string;
  colorClass?: "avatarName-grey" | "avatarName-white";
  size : "big" | "small" | "medium"
  comment? : "create" | "list"
  dateComment? : string
  user_id : string
  editable ? : boolean
  setIsEditable ? : Dispatch<SetStateAction<boolean>>
  comment_id? : string
}

const AvatarIcon = (props: IAvatarProps) => {

  const [profileAuth,setProfileAuth] = useState({} as IProfile)
  const {profile} = useContext(ProfileContext)
  const {profile_id} = useParams()
  const {setComments} = useContext(CommentsContext)
  useEffect(()=>{
    async function getProfile(){
      const response = await getSpecificUser(props.user_id)
      if(response?.message == "success"){
        setProfileAuth(response.data)
      }
    }
    getProfile()
  },[profile_id])

  return (
    <>{profileAuth.full_name != undefined ? 
      <Flex width={"100%"} alignItems={"flex-end"} gap={"9px"}>
        <AvatarStyled width={props.width} colorClass={props.colorClass} size={props.size}>
          <div className='avatarLetter'>{profileAuth.full_name[0]}</div>
          {props.size == "medium" ? <Text mt="1.5rem" text={profileAuth.full_name} variant="title-card" ></Text> : 
          <span className={props.colorClass}>{profileAuth.full_name}</span>
          }
          {props.comment == "list" &&  
          <Flex width={"100%"} height={"100%"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              <Box mr={"0.2rem"} ml={"0.2rem"} borderRadius={"100%"} backgroundColor={"greyScale.grey4"} width={"4px"} height={"4px"}></Box>
              <Text text={props.dateComment as string} variant="date-comment"></Text>
            </Flex>
            <Flex gap={"0.2rem"}>
              {profile.id == profileAuth.id ? 
              <>
                <BiMessageAltEdit className="edit" onClick={()=>{
                  if(props.setIsEditable){
                    props.setIsEditable((value)=> !value)
                  }
                }} size={"1.5rem"}></BiMessageAltEdit>
                <AiFillDelete onClick={async()=>{
                  if(props.comment_id){
                    const response = await DeleteComment(props.comment_id)
                    if(response?.message == "success"){
                      setComments((old)=>{
                        const copy = [...old]
                        const findComment = copy.findIndex((el)=> el.id == props.comment_id)
                        copy.splice(findComment,1)
                        return copy
                      })
                    }
                  }
                }} className="delete" size={"1.5rem"}></AiFillDelete>
              </>
               : <></>}
            </Flex>
          </Flex>
          }
        </AvatarStyled>
        {props.size == "big" && <Text text={profileAuth.accountType == "seller" ? "Anunciante" : "Comprador"} variant="info-card"></Text>}
      </Flex>
 : <></>}</>
  );
};

export default AvatarIcon;
