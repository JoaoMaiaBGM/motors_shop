import { chakra, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { customTheme } from "../../theme";
import { LoginBar } from "../LoginBar";
import { NavBarButtons } from "../NavBarButtons";

export const NavBar = () => {
  const navigate = useNavigate()
  const [lessThan1200] = useMediaQuery("(min-width: 1200px)")

  return (
    <chakra.div
      position={"relative"}
      zIndex={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="80px"
      px="0px"
      borderBottom="2px solid"
      borderBottomColor={customTheme.colors.greyScale.grey6}
    >
      <chakra.img ml={"1rem"} _hover={{cursor : "pointer"}} onClick={()=>{
        navigate("/home")
      }} src={logo} alt="logo" height="26px" />
      <chakra.div height="full" display="flex" alignItems="center">
        {lessThan1200 && <NavBarButtons />}
        <LoginBar />
      </chakra.div> 
    </chakra.div>
  );
};
