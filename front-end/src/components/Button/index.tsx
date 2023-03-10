import {Button as ButtonChakra} from "@chakra-ui/react"

type typeVariants = "open-modal-announcement" | "create-announcement:enable" 
| "create-announcement:disable" | "exclude/cancel-announcement" 
| "select-type-announcement:disabled" | "select-type-announcement:enable" 
| "create-field-image-announcement" | "exclude-announcement" | "buy-vehicle" | "vehicle-sell" | "vehicle-auction" | "exclude-announcement"
| "show-profile" // tipe suas variantes aqui

interface IButtonProps{
    text: string;
    size : "small" | "small-100%" |"large" | "large-100%" | "large-auto" | "small-auto"
    variant : typeVariants
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button(props: IButtonProps){
    return (
    <ButtonChakra zIndex={1} type={props.type} onClick={props.onClick} variant={props.variant} size={props.size} >{props.text}</ButtonChakra>
)
}