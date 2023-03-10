import { StyledDiv, StyledP } from "./style"
import {BiTimer} from "react-icons/bi"

interface ITimerProps{
    startTime? : string
}

export function Timer(props : ITimerProps){
    return (
        <StyledDiv>
            <BiTimer size={"25px"} style={{backgroundColor : "transparent"}}></BiTimer>
            <StyledP>2:00:00</StyledP>
        </StyledDiv>
    )
}