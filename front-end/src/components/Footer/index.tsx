import { Footer1 } from "./styles";
import logoMotorsShop from "../../assets/logoMotorsShop.png";
import { useMediaQuery } from "@chakra-ui/react";

const Footer = () => {

  const [lessThan800] = useMediaQuery("(min-width: 800px)")

  return (
    <Footer1>{
      lessThan800 ? <>
        <img src={logoMotorsShop} alt="logo" />
        <p>&copy; 2002 - Todos os direitos reservados</p>
        <button>^</button>
      </>
      :
      <img src={logoMotorsShop} alt="logo" />
    }
    </Footer1>
  );
};

export default Footer;
