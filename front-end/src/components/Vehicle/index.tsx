import { CarImage } from "../CarImage";
import { Box, Flex, propNames } from "@chakra-ui/react";
import { VehiclePhotos } from "../VehiclePhotos";
import InfoVehicle from "../InfoVehicle";
import {Text} from "../Text"
import { Button } from "../Button";
import {useParams} from "react-router-dom"
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { getSpecificAnnouncement } from "../../utils/announcement.util";
import { useEffect, useState } from "react";
import { Comments } from "../Comments";
import { AvatarCar } from "../AvatarCar";

export function Vehicle(){

    const {vehicle_id} = useParams()
    const [vehicle,setVehicle] = useState({} as IAnnouncement)

    useEffect(()=>{
        async function specificAnnouncement(){
            if(vehicle_id){
                const response = await getSpecificAnnouncement(vehicle_id)
                if(response?.message == "success"){
                    setVehicle(response?.data)
                }
            }
        }
        specificAnnouncement()
    },[])

    function handleRedirectWhatsapp() {
        window.open(
          `http://api.whatsapp.com/send?1=pt_BR&phone=${vehicle.user.phone}`,
          "_system",
          "location=yes"
        );
        return false;
      }

    return (
        <Flex width={"100%"} justifyContent={"center"} alignItems={{phone : "center", desktopSmall : "flex-start"}} flexDirection={{phone : "column",desktopSmall : "row"}} gap={"40px"}>
            <Flex mb={"1rem"} flexDirection="column" gap={"1rem"} alignItems={"center"}>
                <CarImage galleryImage={false} background={true} image={vehicle.coverImage}></CarImage>
                <Box zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                    <Text variant="title-card" text={vehicle.title}></Text>
                    <InfoVehicle km={vehicle.km} price={vehicle.price} year={vehicle.year} colorClass="vehiclePrice-grey"></InfoVehicle>
                    <Button onClick={handleRedirectWhatsapp} text="Comprar" size="small-auto" variant="buy-vehicle"></Button>
                </Box>
                {vehicle.description && <Box mb={"1rem"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                    <Text variant="title-card" text="Descrição"></Text>
                    <Text variant="profile-description" text={vehicle.description as string}></Text>
                </Box>}
                <Comments></Comments>
            </Flex>
            <Flex mb={"1rem"} gap={"1rem"} flexDirection={"column"}>
                <VehiclePhotos></VehiclePhotos>
                {vehicle?.user &&  <AvatarCar user_id={vehicle.user.id} size="medium"></AvatarCar> }
            </Flex>
        </Flex>
    )
}