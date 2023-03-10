import {Text as TextChakra} from "@chakra-ui/react"

type typeVariants = "title"|"title-content-form" | "label-content-form" | "errors-form" | "text-delete" | "title-card" | "info-card" | "profile-description" | "car-description" | "date-comment"// tipe suas variantes aqui

interface ITextProps{
    text: string
    variant : typeVariants
    mt? : string
    width? : "100%" | "auto"
    textAlign? : "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start"
}

export function Text(props: ITextProps){
    return (
    <TextChakra textAlign={props.textAlign} width={props.width} mt={props.mt} wordBreak={"break-word"} variant={props.variant}>{props.text}</TextChakra>
)
}