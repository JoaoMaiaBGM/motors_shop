import { Box, chakra, IconButton, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import ProductCard from "../ProductCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { scrollLeftAuction, scrollRightAuction } from "../../utils/lists.util";
import {
  scrollLeftCar,
  scrollRightCar,
  scrollLeftMotorcycle,
  scrollRightMotorcycle,
} from "../../utils/lists.util";

interface IAuctionListProps {}

interface ISaleListProps {
  vehicleType: "Carros" | "Motos";
}

export const AuctionList = (props: IAuctionListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <>
      {announcements.filter((el) => el.announcementType == "auction").length >
        0 && (
        <chakra.section
        width={"100%"}
          className="carousel"
          position={"relative"}
          mb={"3rem"}
        >
          <Text
            fontFamily="fonts.lexend"
            fontWeight="600"
            fontSize="24px"
            lineHeight="30px"
            marginTop="30px"
            marginBottom="30px"
          >
            Leilão
          </Text>

          <Box
            className="carouselAuctionContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            {announcements.filter((el) => el.announcementType == "auction")
              .length > 1 && (
              <IconButton
                marginRight={"10px"}
                aria-label="left-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollLeftAuction()}
              >
                <BiLeftArrowAlt />
              </IconButton>
            )}

            <chakra.div
              className="carouselAuctionCardsContainer"
              maxWidth="fit-content"
              height="400px"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX={"hidden"}
              gap="25px"
              cursor={"pointer"}
            >
              {announcements.map((announcement) => {
                if (announcement.announcementType == "auction") {
                  return (
                    <ProductCardAuction
                      user_id={announcement.user.id}
                      id={announcement.id}
                      coverImage={announcement.coverImage}
                      km={announcement.km}
                      price={announcement.price}
                      title={announcement.title}
                      year={announcement.year}
                      description={announcement.description}
                      key={announcement.id}
                    ></ProductCardAuction>
                  );
                }
              })}
            </chakra.div>

            {/* Right Icon */}
            {announcements.filter((el) => el.announcementType == "auction")
              .length > 1 && (
              <IconButton
                marginLeft={"10px"}
                aria-label="right-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollRightAuction()}
              >
                <BiRightArrowAlt />
              </IconButton>
            )}
          </Box>
        </chakra.section>
      )}
    </>
  );
};

export const SaleList = (props: ISaleListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <>
    {announcements.filter(
        (el) =>
          el.announcementType == "sale" &&
          el.vehicleType == "car" &&
          props.vehicleType == "Carros"
      ).length > 0 && (
        <chakra.section
          position={"relative"}
          mr={"2rem"}
          ml={"2rem"}
          className="carousel"
        >
          <Text
            fontFamily="fonts.lexend"
            fontWeight="600"
            fontSize="24px"
            lineHeight="30px"
            marginTop="30px"
            marginBottom="30px"
          >
            {props.vehicleType}
          </Text>

          <Box
            className="carouselSaleContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            {announcements.filter(
              (el) =>
                el.announcementType == "sale" &&
                el.vehicleType == "car" &&
                props.vehicleType == "Carros"
            ).length > 3 && (
              <IconButton
                marginRight={"10px"}
                aria-label="left-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollLeftCar()}
              >
                <BiLeftArrowAlt />
              </IconButton>
            )}

            <chakra.div
              className="carouselSaleCars"
              width="fit-content"
              height="100%"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX="hidden"
              gap="15px"
            >
              {announcements.map((announcement) => {
                if (
                  announcement.vehicleType == "car" &&
                  announcement.announcementType == "sale"
                ) {
                  return (
                    <ProductCard
                      user_id={announcement.user.id}
                      id={announcement.id}
                      coverImage={announcement.coverImage}
                      km={announcement.km}
                      price={announcement.price}
                      title={announcement.title}
                      year={announcement.year}
                      description={announcement.description}
                      key={announcement.id}
                    ></ProductCard>
                  );
                }
              })}
            </chakra.div>

            {/* Right Icon */}
            {announcements.filter(
              (el) =>
                el.announcementType == "sale" &&
                el.vehicleType == "car" &&
                props.vehicleType == "Carros"
            ).length > 3 && (
              <IconButton
                marginLeft={"10px"}
                aria-label="right-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollRightCar()}
              >
                <BiRightArrowAlt />
              </IconButton>
            )}
          </Box>
        </chakra.section>
      )}

      {announcements.filter(
        (el) =>
          el.announcementType == "sale" &&
          el.vehicleType == "motorcycle" &&
          props.vehicleType == "Motos"
      ).length > 0 && (
        <chakra.section
          position={"relative"}
          mr={"2rem"}
          ml={"2rem"}
          className="carousel"
        >
          <Text
            fontFamily="fonts.lexend"
            fontWeight="600"
            fontSize="24px"
            lineHeight="30px"
            marginTop="30px"
            marginBottom="30px"
          >
            {props.vehicleType}
          </Text>

          <Box
            className="carouselSaleContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            {announcements.filter(
              (el) =>
                el.announcementType == "sale" &&
                el.vehicleType == "motorcycle" &&
                props.vehicleType == "Motos"
            ).length > 3 && (
              <IconButton
                marginRight={"10px"}
                aria-label="left-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollLeftMotorcycle()}
              >
                <BiLeftArrowAlt />
              </IconButton>
            )}

            <chakra.div
              className="carouselSaleMotorcycle"
              width="fit-content"
              height="100%"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX="hidden"
              gap="15px"
            >
              {announcements.map((announcement) => {
                if (
                  announcement.vehicleType == "motorcycle" &&
                  announcement.announcementType == "sale"
                ) {
                  return (
                    <ProductCard
                      user_id={announcement.user.id}
                      id={announcement.id}
                      coverImage={announcement.coverImage}
                      km={announcement.km}
                      price={announcement.price}
                      title={announcement.title}
                      year={announcement.year}
                      description={announcement.description}
                      key={announcement.id}
                    ></ProductCard>
                  );
                }
              })}
            </chakra.div>

            {/* Right Icon */}
            {announcements.filter(
              (el) =>
                el.announcementType == "sale" &&
                el.vehicleType == "motorcycle" &&
                props.vehicleType == "Motos"
            ).length > 3 && (
              <IconButton
                marginLeft={"10px"}
                aria-label="right-arrow"
                variant="select-type-announcement:disabled"
                borderRadius="full"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => scrollRightMotorcycle()}
              >
                <BiRightArrowAlt />
              </IconButton>
            )}
          </Box>
        </chakra.section>
      )}
    </>
  );
};
