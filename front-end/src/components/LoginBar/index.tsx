import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button, chakra, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { customTheme } from "../../theme";
import { useContext, useEffect, useState } from "react";
import { MenuProfile } from "../MenuProfile";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { getSpecificUserToken } from "../../utils/user.util";
import {GiHamburgerMenu} from "react-icons/gi"

export const LoginBar = () => {
  const {profile,setProfile} = useContext(ProfileContext)
  const navigate = useNavigate();
  const [lessThan1200] = useMediaQuery("(min-width: 800px)")

  useEffect(()=>{
    async function getProfileToken(){
      const response = await getSpecificUserToken()
      if(response?.message == "success"){
        setProfile(response.data)
      }
    }
    getProfileToken()
  },[])

  return (
    <chakra.div
      mr={"1rem"}
      pl="44px"
      borderLeft="2px solid"
      borderLeftColor={customTheme.colors.greyScale.grey6}
      height="80px"
      display="flex"
      alignItems="center"
    >
      {profile.full_name != undefined ? <MenuProfile></MenuProfile> : lessThan1200 ? (
        <Breadcrumb separator="" spacing="22">
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate("/login")}>
              Fazer Login
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              variant={"select-type-announcement:disabled"}
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : <Menu>
          <MenuButton _hover={{opacity : 0.5}} mr={"1rem"}>
            <GiHamburgerMenu size={"2rem"}></GiHamburgerMenu>
          </MenuButton>
          <MenuList width={"max-content"}>
              <MenuItem onClick={() => navigate("/login")}>
                Fazer Login
              </MenuItem>
              <MenuItem onClick={() => navigate("/register")}>
                Registrar
              </MenuItem>
          </MenuList>
        </Menu>}
    </chakra.div>
  );
};
