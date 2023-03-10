import { AvatarContainer } from "../../components/AvatarContainer";
import { Background } from "../../components/Background";
import { AuctionList, SaleList } from "../../components/Lists";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnnouncementUser } from "../../utils/announcement.util";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { Text } from "../../components/Text";
import { Box, Flex } from "@chakra-ui/react";

export function Profile() {

  const { setAnnouncements,announcements } = useContext(AnnouncementContext);
  const {profile_id} = useParams()

  useEffect(() => {
    async function getAnnouncementsUser(){
        const response = await getAnnouncementUser(profile_id as string)
        if(response?.message == "success"){
          console.log(response)
          setAnnouncements(response?.data)
        }
        if(response?.message == "error"){
          setAnnouncements([] as IAnnouncement[])
        }
    }
    console.log(Object.keys(announcements).length)
    getAnnouncementsUser()
  }, [profile_id]);

  return (
    <>
      <NavBar></NavBar>
      <Background purpleHeight="300px">
        <>
        <AvatarContainer user_id={profile_id as string} size="big"></AvatarContainer>
        {announcements.length == 0 ? <Flex alignItems={"center"} width={"max-content"} height={"50vh"} right={0} left={0} margin={"auto auto"} position={"absolute"}><Text variant="title" text="Sem anúncios"></Text></Flex> : 
        <>
          <AuctionList></AuctionList>
          <SaleList vehicleType="Carros"></SaleList>
          <SaleList vehicleType="Motos"></SaleList>
        </> }
        
        </>
      </Background>
      <Footer />
    </>
  );
}
