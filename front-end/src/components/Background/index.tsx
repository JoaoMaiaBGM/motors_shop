import { Box } from "@chakra-ui/react"
import { ReactElement } from "react"

interface IBackgroundProps{
    purpleHeight : string
    children : ReactElement
}
export function Background(props : IBackgroundProps){
   return <Box mt={"40px"} width={"100vw"} minHeight={"100vh"} backgroundColor="greyScale.grey8">
            <Box top={"20"} width={"100%"} height={props.purpleHeight} position={"absolute"} backgroundColor="brand.brand1"></Box>
            {props.children}
          </Box>

}