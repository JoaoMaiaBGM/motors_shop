import { Box, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,useDisclosure } from "@chakra-ui/react";
import {Text} from "../Text"
import { Button } from "../Button";
import { InputText } from "../InputText";
import { TextArea } from "../TextArea";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { announcementSchema } from "../../schemas/announcement.schema";
import { useContext } from "react";
import { createAnnouncement } from "../../utils/announcement.util";
import { AnnouncementContext } from "../../contexts/announcement.context";

export function ModalAnnouncementCreate(){
    const { isOpen, onOpen, onClose} = useDisclosure()

    const {handleSubmit,register,setValue,formState : {errors,isValid},watch} = useForm({resolver : yupResolver(announcementSchema)})

    const type = watch("announcementType")
    const typeVehicle = watch("vehicleType")

    const {announcements,setAnnouncements} = useContext(AnnouncementContext)

    return(        
    <>
        <ButtonGroup mt={"1rem"}>
            <Button onClick={onOpen} variant="open-modal-announcement" size="large" text="Criar anúncio"></Button>
        </ButtonGroup>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Anúncio</ModalHeader>
          <ModalCloseButton />

        <form onSubmit={handleSubmit(async(data)=>{
            const response = await createAnnouncement(data)
            if(response?.message == "success"){
                setAnnouncements((oldArray)=> [...oldArray,response.data])
                onClose()
            }
        })}>
          <ModalBody>
                <Box mb={"2rem"}>
                    <Text text="Tipo de anúncio" variant="title-content-form"></Text>
                    <ButtonGroup justifyContent={"center"} width={"100%"}>
                        <Button onClick={(e)=>{
                            setValue("announcementType","sale",{shouldValidate : true})
                        }} variant={type == "sale" ? "select-type-announcement:enable" : "select-type-announcement:disabled"} size="large-100%" text="Venda"></Button>
                        <Button onClick={(e)=>{
                            setValue("announcementType","auction",{shouldValidate : true})
                        }} variant={type == "auction" ? "select-type-announcement:enable" : "select-type-announcement:disabled"} size="large-100%" text="Leilão"></Button>
                    </ButtonGroup>
                    {errors.type && <Text variant="errors-form" text={errors.type.message as string}></Text> }
                </Box>
                <Text text="Informações do veículo" variant="title-content-form"></Text>
                    <InputText register={{...register("title")}} placeholder="Digitar título" text="Título"></InputText>
                    {errors.title && <Text variant="errors-form" text={errors.title.message as string}></Text> }
                <Flex gap={"1rem"} mt={"1rem"}>
                    <Box>
                        <InputText register={{...register("year")}} placeholder="Digitar ano" text="Ano"></InputText>
                        {errors.year && <Text variant="errors-form" text={errors.year.message as string}></Text> }
                    </Box>
                    <Box>
                        <InputText register={{...register("km")}} placeholder="0" text="Quilometragem"></InputText>
                        {errors.km && <Text variant="errors-form" text={errors.km.message as string}></Text> }
                    </Box>
                    <Box>
                        <InputText register={{...register("price")}} placeholder={"0"} text={type == "sale" ? "Preço" : "Lance inicial"}></InputText>
                        {errors.price && <Text variant="errors-form" text={errors.price.message as string}></Text> }
                    </Box>
                </Flex>
                <Box>
                    <TextArea register={{...register("description")}} text="Descrição" placeholder="Digitar Descrição"></TextArea>
                </Box>
                <Box mb={"2rem"}>
                    <Text text="Tipo de veículo" variant="title-content-form"></Text>
                    <ButtonGroup justifyContent={"center"} width={"100%"}>
                        <Button onClick={(e)=>{
                            setValue("vehicleType","car",{shouldValidate : true})
                        }} variant={typeVehicle == "car" ? "select-type-announcement:enable" : "select-type-announcement:disabled"} size="large-100%" text="Carro"></Button>
                        <Button onClick={(e)=>{                           
                            setValue("vehicleType","motorcycle",{shouldValidate : true})
                        }} variant={typeVehicle == "motorcycle" ? "select-type-announcement:enable" : "select-type-announcement:disabled"} size="large-100%" text="Moto"></Button>
                    </ButtonGroup>
                    {errors.vehicleType && <Text variant="errors-form" text={errors.vehicleType.message as string}></Text> }
                </Box>
                <Box>
                    <InputText register={{...register("coverImage")}} placeholder="Inserir URL da imagem" text="Imagem da capa"></InputText>
                    {errors.coverImage && <Text variant="errors-form" text={errors.coverImage.message as string}></Text> }
                </Box>
                <Box mt={"1rem"}>
                    <InputText placeholder="Inserir URL da imagem" text="1° Imagem da galeria"></InputText>
                </Box>
                <Box mt={"1rem"} mb={"1rem"}>
                    <Button variant="create-field-image-announcement" text="Adicionar campo para imagem da galeria" size="small-auto"></Button>
                </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="exclude/cancel-announcement" size="small-auto" text="Cancelar"></Button>
            <Button type={"submit"} variant={isValid ? "create-announcement:enable":"create-announcement:disable"} size="small-auto" text="Criar anúncio"></Button>
          </ModalFooter>
        </form>
        </ModalContent>
      </Modal>
    </>

    )
}