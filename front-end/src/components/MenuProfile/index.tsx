import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { IProfile } from "../../interfaces/user.interface";
import { Logout } from "../../utils/logout.util";
import { getSpecificUserToken } from "../../utils/user.util";
import AvatarProfile from "../AvatarProfile";
import { ModalAddressUpdate } from "../ModalAddressUpdate";
import { ModalUserUpdate } from "../ModalUserUpdate";

export const MenuProfile = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <Menu>
      <MenuButton>
        <AvatarProfile size="small" colorClass="avatarName-grey" />
      </MenuButton>
      <MenuList width="200px">
        <ModalUserUpdate user_id={profile.id}></ModalUserUpdate>
        <ModalAddressUpdate user_id={profile.id}></ModalAddressUpdate>
        <MenuItem
          onClick={() => {
            navigate(`/profile/${profile.id}`);
          }}
          pl="22px"
          py="8px"
        >
          {profile.accountType == "seller" ? "Meus anúncios" : "Minhas compras"}
        </MenuItem>
        <MenuItem
          onClick={() => {
            Logout();
            setProfile({} as IProfile);
            navigate("/login");
          }}
          pl="22px"
          py="8px"
        >
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
