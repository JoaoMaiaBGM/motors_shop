import { StyledDiv } from "./style";
import { CarImage } from "../CarImage";
import { Timer } from "../Timer";
import Avatar from "../AvatarIcon";
import InfoVehicle from "../InfoVehicle";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { ButtonGroup } from "@chakra-ui/react";
import { Button } from "../Button";
import { ModalAnnouncementUpdate } from "../ModalAnnouncementUpdate";
import { IProfile } from "../../interfaces/user.interface";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profile.context";

interface IProductCardAuctionProps{
  id : string
  title : string
  description? : string
  km: number
  price : number
  year : string
  coverImage : string
  user_id: string
}

export function ProductCardAuction(props : IProductCardAuctionProps) {

  const {profile} = useContext(ProfileContext)
  const navigate = useNavigate()

  return (
    <StyledDiv>
      <div className="box__content">
        <Timer></Timer>
        <div onClick={()=>{
      navigate(`/vehicle/${props.id}`)
    }} className="content">
          <h3 className="content_title">{props.title}</h3>
          <p className="content_description">{props.description}</p>
          <Avatar user_id={props.user_id} size="small" colorClass="avatarName-white"></Avatar>
          <InfoVehicle
            colorClass="vehiclePrice-white"
            km={props.km}
            price={props.price}
            year={props.year}
          ></InfoVehicle>
        </div>
        <div className="navigation">
          {profile.id == props.user_id ? <ButtonGroup width={"100%"}>
            <ModalAnnouncementUpdate type="auction" vehicle_id={props.id}></ModalAnnouncementUpdate>
            <Button onClick={()=>{
      navigate(`/vehicle/${props.id}`)
    }} size="small-auto" text="Ver como" variant="vehicle-auction"></Button>
          </ButtonGroup> : <>
          <p className="navigation_title">Acessar página do leilão</p>
          <AiOutlineArrowRight className="navigation_icon"></AiOutlineArrowRight>
          </>}
        </div>
      </div>
      <CarImage image={props.coverImage} galleryImage={false}></CarImage>
    </StyledDiv>
  );
}
