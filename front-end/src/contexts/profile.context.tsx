import {
    Dispatch,
    ReactElement,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  import { IProfile } from "../interfaces/user.interface"; 
  
  interface IProfileContext {
    profile: IProfile;
    setProfile: Dispatch<SetStateAction<IProfile>>;
  }
  interface IProfileProviderProps{
      children : ReactElement[] | ReactElement
  }
  
  export const ProfileContext = createContext({} as IProfileContext);
  
  export function ProfileProvider(props: IProfileProviderProps) {
    const [profile, setProfile] = useState({} as IProfile);
  
    return (
      <ProfileContext.Provider value={{ profile,setProfile }}>
        {props.children}
      </ProfileContext.Provider>
    );
  }
  