import {
    Dispatch,
    ReactElement,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  import { IAnnouncement } from "../interfaces/announcement.interface";
import { IComment } from "../interfaces/comment.interface";
  
  interface ICommentsContext {
    comments: IComment[];
    setComments: Dispatch<SetStateAction<IComment[]>>;
  }
  interface ICommentsProviderProps{
      children : ReactElement[] | ReactElement
  }
  
  export const CommentsContext = createContext({} as ICommentsContext);
  
  export function CommentsProvider(props: ICommentsProviderProps) {
    const [comments, setComments] = useState([] as IComment[]);
  
    return (
      <CommentsContext.Provider value={{ comments, setComments }}>
        {props.children}
      </CommentsContext.Provider>
    );
  }
  