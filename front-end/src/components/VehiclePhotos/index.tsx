import { Box,Flex,Wrap, WrapItem} from "@chakra-ui/react";
import image from "../../assets/carImg.png"
import { CarImage } from "../CarImage";
import {Text} from "../Text"

export function VehiclePhotos(){
    return(
        <Flex alignItems={"center"} width={{phone : "351px",desktopLarge : "440px"}} height={"max-content"} backgroundColor={"greyScale.grey10"} flexDirection={"column"} zIndex={1} padding={"2rem"} gap={"1rem"}>
            <Flex justifyContent={"flex-start"} width={"100%"}>
                <Text text="Fotos" variant="title-card"></Text>
            </Flex>
            <Wrap>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image} ></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
            </Wrap>
            <Wrap>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
            </Wrap>
        </Flex>
    )
}