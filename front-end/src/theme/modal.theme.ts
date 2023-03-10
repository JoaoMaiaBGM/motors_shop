import { ComponentStyleConfig } from "@chakra-ui/theme"

const modalTheme : ComponentStyleConfig = {
  baseStyle : {
    padding : "16px 24px",
    footer : {
        gap :"10px"
    }
  },
  variants : {
    "create-auction" : {
        header : {
            fontFamily : "lexend",
            fontSize  : "Heading-7-500.size",
            fontWeight : "Heading-7-500.weight"
        },
        closeButton : {
            color : "greyScale.grey4"
        }
    }
  }
}

export default modalTheme