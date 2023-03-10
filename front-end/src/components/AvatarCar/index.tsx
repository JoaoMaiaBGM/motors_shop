import { Box, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { IProfile } from "../../interfaces/user.interface";
import { getSpecificUser } from "../../utils/user.util";
import AvatarIcon from "../AvatarIcon";
import { Button } from "../Button";
import { Text } from "../Text";

interface IAvatarCarProps{
    size : "small" | "medium" | "big"
    user_id : string
}

export function AvatarCar(props : IAvatarCarProps){

    const [profileAuth,setProfileAuth] = useState({} as IProfile)

    async function getProfile(){
        const response = await getSpecificUser(props.user_id)
        if(response?.message == "success"){
          setProfileAuth(response.data)
        }
      }
      if(props.user_id){
        getProfile()
      }

    const navigate = useNavigate()

    return(
        <Flex flexDirection={"column"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "440px"}} height={"max-content"} padding={"1rem"} position={"relative"} justifyContent={"center"} alignItems="center">
            <AvatarIcon width="100%" user_id={props.user_id} size={props.size} colorClass="avatarName-white"></AvatarIcon>
            <Text textAlign="center" text={profileAuth?.description ? profileAuth.description : ""} variant="car-description"></Text>
            <Button size="small-auto" onClick={()=>{
                navigate(`/profile/${profileAuth.id}`)
            }} text="Ver todos os anúncios" variant="show-profile"></Button>
        </Flex>
    )
}