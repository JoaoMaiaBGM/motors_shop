import { Box, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { IProfile } from "../../interfaces/user.interface";
import { sellerMocked } from "../../mocks/user.mock";
import { getSpecificUser } from "../../utils/user.util";
import AvatarIcon from "../AvatarIcon";
import { ModalAnnouncementCreate } from "../ModalAnnouncementCreate";
import { Text } from "../Text";

interface IAvatarContainerProps{
    size : "small" | "medium" | "big"
    user_id : string
    
}

export function AvatarContainer(props : IAvatarContainerProps){


    const [profileAuth,setProfileAuth] = useState({} as IProfile)
    const {profile} = useContext(ProfileContext)
    const {profile_id} = useParams()

    useEffect(()=>{
      async function getProfile(){
        const response = await getSpecificUser(props.user_id)
        if(response?.message == "success"){
          setProfileAuth(response.data)
        }
      }
      if(props.user_id){
        getProfile()
      }
    },[profile_id])

    return( 
        <Flex position={"relative"} justifyContent={"center"}>
            <Box w={{phone : "90%", desktopSmall : "50%"}} backgroundColor={"greyScale.grey10"} position={"relative"} p={"2rem"}>
                <AvatarIcon user_id={props.user_id} size={props.size} colorClass="avatarName-white"></AvatarIcon>
                <Text text={profileAuth?.description ? profileAuth.description : ""} variant="profile-description"></Text>
                {profile.id == profileAuth.id && profileAuth.accountType == "seller" ? <ModalAnnouncementCreate></ModalAnnouncementCreate> : <></>}
            </Box>
        </Flex>
    )
}