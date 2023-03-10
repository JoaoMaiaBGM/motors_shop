import { ReactElement } from "react";
import { Navigate} from "react-router-dom";

interface IProtectedRouteProps{
    children : ReactElement
}

export function ProtectedRoute(props : IProtectedRouteProps){
    const token = localStorage.getItem("$TOKEN")

   return  (
     token ? props.children : <Navigate to={"/login"}></Navigate>
     )
}