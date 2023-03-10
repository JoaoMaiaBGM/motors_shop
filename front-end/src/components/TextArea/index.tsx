import { Box, Textarea } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import {customTheme} from "../../theme"
import { Button } from "../Button";
import { Text } from "../Text";

interface ITextArea{
  text : string
  placeholder : string;
  buttonText? : string;
  comment? : boolean
  register? : UseFormRegisterReturn<"description" | "content">
}

export const TextArea = (props : ITextArea) => {
  return (
    <Box position={"relative"}>
      <Text text={props.text} variant="label-content-form"></Text>
      <Textarea
        {...props.register}
        fontFamily={"inter"}
        fontSize={"1rem"}
        placeholder={props.placeholder}
        size={"lg"}
        border={`1.5px solid ${customTheme.colors.greyScale.grey7}`}
        focusBorderColor={customTheme.colors.brand.brand2}
        _hover={{ backgroundColor: customTheme.colors.greyScale.grey8 }}
        color={customTheme.colors.greyScale.grey1}
        _placeholder={{ color: customTheme.colors.greyScale.grey3 }}
      >
      </Textarea>
      {props.comment && 
      <Box bottom="0" right="0" position="absolute" padding={"0.5rem"}>
        <Button type="submit" variant="select-type-announcement:enable" text={props.buttonText ? props.buttonText : "Comentar"} size="small-auto"></Button>
      </Box>
      }
    </Box>
  );
};
