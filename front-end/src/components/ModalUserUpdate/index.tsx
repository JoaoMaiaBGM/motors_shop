import { Box, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ProfileContext } from "../../contexts/profile.context"
import { userUpdateSchema } from "../../schemas/user.schema"
import { updateUser } from "../../utils/user.util"
import { Button } from "../Button"
import { InputText } from "../InputText"
import { Text } from "../Text"


interface IModalUserUpdateProps{
    user_id : string
}
export function ModalUserUpdate(props : IModalUserUpdateProps){
    const { isOpen, onOpen, onClose} = useDisclosure()

    const {handleSubmit,register,setValue,formState : {errors,isValid},watch} = useForm({resolver : yupResolver(userUpdateSchema)})

    const {profile,setProfile} = useContext(ProfileContext)

    return(        
    <>
       <MenuItem onClick={()=>{
        onOpen()
       }} pl="22px" py="8px" mt="13px">
          Editar perfil
        </MenuItem>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />

        <form onSubmit={handleSubmit(async(data)=>{
            const response = await updateUser(data)
            if(response?.message == "success"){
                setProfile(response.data)
                onClose()
            }
        })}>  

          <ModalBody display={"flex"} flexDirection={"column"} gap={"1rem"}>
            <Text text="Informações pessoais" variant="title-content-form"></Text>
                <Box>
                    <InputText register={{...register("full_name")}} placeholder="Digitar nome" text="Nome"></InputText>
                    {errors.full_name && <Text variant="errors-form" text={errors.full_name.message as string}></Text> }
                </Box>
                <Box>
                    <InputText  register={{...register("email")}} placeholder="@kenzie.com.br" text="Email"></InputText>
                    {errors.email && <Text variant="errors-form" text={errors.email.message as string}></Text> }
                </Box>
                <Box>
                    <InputText register={{...register("cpf")}} placeholder="000.000.000-00" text="CPF"></InputText>
                    {errors.cpf && <Text variant="errors-form" text={errors.cpf.message as string}></Text> }
                </Box>
                <Box>
                    <InputText type={"tel"} register={{...register("phone")}} placeholder="(27)4444-4444" text="Celular"></InputText>
                    {errors.phone && <Text variant="errors-form" text={errors.phone.message as string}></Text> }
                </Box>
                <Box>
                    <InputText type={"date"} register={{...register("birthDate")}} placeholder="02/02/1998" text="Data de nascimento"></InputText>
                    {errors.birthDate && <Text variant="errors-form" text={errors.birthDate.message as string}></Text> }
                </Box>
                <Box>
                    <InputText register={{...register("description")}} placeholder="" text="Descrição"></InputText>
                    {errors.description && <Text variant="errors-form" text={errors.description.message as string}></Text> }
                </Box>
          </ModalBody>
          <ModalFooter>
          <Button onClick={onClose} variant="exclude/cancel-announcement" size="large-100%" text="Cancelar"></Button>
            <Button type={"submit"} variant={"create-announcement:enable"} size="large-100%" text="Salvar alterações"></Button>
          </ModalFooter>
        </form>  
        </ModalContent>
      </Modal>
    </>

    )
}