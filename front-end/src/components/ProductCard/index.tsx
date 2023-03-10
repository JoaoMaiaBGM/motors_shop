import Avatar from "../AvatarIcon";
import InfoVehicle from "../InfoVehicle";
import { Box, Text, Image, ButtonGroup } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { ModalAnnouncementUpdate } from "../ModalAnnouncementUpdate";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profile.context";

interface IProductCardProps {
  id: string;
  title: string;
  description?: string;
  km: number;
  price: number;
  year: string;
  coverImage: string;
  user_id: string;
}

const ProductCard = (props: IProductCardProps) => {
  const { profile } = useContext(ProfileContext);
  const navigate = useNavigate();

  return (
    <Box
      width="300px"
      height="340px"
      marginTop="10px"
      marginBottom="7px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      padding="2px 10px"
    >
      <Box
        width="100%"
        height="142px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="greyScale.grey7"
        _hover={{
          border: "solid 2px",
          borderColor: "brand.brand1",
        }}
      >
        <Image
          onClick={() => {
            navigate(`/vehicle/${props.id}`);
          }}
          src={props.coverImage}
          alt="A car image"
          width="90%"
          height="90%"
          _hover={{ transform: "scale(1.1)", transition: "650ms" }}
        />
      </Box>
      <Text
        width="100%"
        height="20px"
        margin="0"
        fontFamily="Lexend, sans-serif"
        fontWeight="600"
        fontSize="15px"
        color="greyScale.grey0"
      >
        {props.title}
      </Text>
      {props.description && (
        <Text
          width="100%"
          height="48px"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          margin="0"
          fontFamily="Inter, sans-serif"
          fontWeight="400"
          fontSize="14px"
          color="greyScale.grey2"
        >
          {props.description}
        </Text>
      )}

      <Avatar
        user_id={props.user_id}
        size="small"
        colorClass="avatarName-grey"
      />
      <InfoVehicle
        colorClass="vehiclePrice-grey"
        km={props.km}
        price={props.price}
        year={props.year}
      />
      {props.user_id == profile.id && (
        <ButtonGroup>
          <ModalAnnouncementUpdate
            type="sell"
            vehicle_id={props.id}
          ></ModalAnnouncementUpdate>
          <Button
            onClick={() => {
              navigate(`/vehicle/${props.id}`);
            }}
            size="small-auto"
            text="Ver como"
            variant="vehicle-sell"
          ></Button>
        </ButtonGroup>
      )}
    </Box>
  );
};

export default ProductCard;
