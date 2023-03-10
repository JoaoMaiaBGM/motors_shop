import { Box, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/profile.context";
import { getSpecificUserToken } from "../../utils/user.util";
import { Text } from "../Text";
import { AvatarStyled } from "./style";

export interface IAvatarProps {
  colorClass?: "avatarName-grey" | "avatarName-white";
  size : "big" | "small" | "medium"
  comment? : "create" | "list"
  dateComment? : string
}

 const AvatarProfile = (props: IAvatarProps) => {

  const {profile,setProfile} = useContext(ProfileContext)

  return (
    <>{profile.full_name != undefined ? 
      <Flex mr={"1rem"} alignItems={"flex-end"} gap={"9px"}>
        <AvatarStyled colorClass={props.colorClass} size={props.size}>
          <div className='avatarLetter'>{profile.full_name[0]}</div>
          {props.size == "medium" ? <Text mt="1.5rem" text={profile.full_name} variant="title-card" ></Text> : 
          <span className={props.colorClass}>{profile.full_name}</span>
          }
          {props.comment == "list" &&  
          <>
            <Box mr={"0.2rem"} ml={"0.2rem"} borderRadius={"100%"} backgroundColor={"greyScale.grey4"} width={"4px"} height={"4px"}></Box>
            <Text text={props.dateComment as string} variant="date-comment"></Text>
          </>
          }
        </AvatarStyled>
        {props.size == "big" && <Text text={profile.accountType == "seller" ? "Anunciante" : "Comprador"} variant="info-card"></Text>}
      </Flex>
  : <></>}</>
  );
};

export default AvatarProfile;
