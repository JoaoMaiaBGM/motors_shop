import { Box, FormLabel, Input } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { customTheme } from "../../theme";

interface IInputText{
  text : string
  placeholder : string;
  register? : UseFormRegisterReturn<"cep"|"state"|"city"|"complement"|"number"|"street"|"description"|"full_name"|"cpf"|"phone"|"birthDate"|"email"|"password"|"title"|"year"|"km"|"price"|"coverImage">
  type? : | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | (string & {});
}


export const InputText = (props: IInputText) => {
  return (
    <Box>
      <FormLabel variant={"forms-label"} htmlFor={props.text}>{props.text}</FormLabel>
      <Input
        type={props.type}
        id={props.text}
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
      ></Input>
    </Box>
  );
};
