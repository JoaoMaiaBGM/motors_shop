import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";
import { IAnnouncement } from "../interfaces/announcement.interface";
import { apiAnnouncement } from "../api";

interface IAnnouncementContext {
  announcements: IAnnouncement[];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[]>>;
}
interface IAnnouncementProviderProps{
    children : ReactElement[] | ReactElement
}

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export function AnnouncementProvider(props: IAnnouncementProviderProps) {
  const [announcements, setAnnouncements] = useState([] as IAnnouncement[]);

  return (
    <AnnouncementContext.Provider value={{ announcements, setAnnouncements }}>
      {props.children}
    </AnnouncementContext.Provider>
  );
}
