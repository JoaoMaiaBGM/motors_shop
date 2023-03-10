import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { AnnouncementContext } from "../../contexts/announcement.context"
import { deleteAnnouncement } from "../../utils/announcement.util"
import { Button } from "../Button"
import { Text } from "../Text"

interface IModalAnnouncementDeleteProps{
    vehicle_id : string
}

export function ModalAnnouncementDelete(props : IModalAnnouncementDeleteProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {setAnnouncements} = useContext(AnnouncementContext)

    return(
        <>
        <Button onClick={onOpen} variant="exclude/cancel-announcement" size="large-100%" text="Excluir anúncio"></Button>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Excluir Anúncio</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box mb={"2rem"}>
                        <Text text="Tem certeza que deseja remover este anúncio?" variant="title-content-form"></Text>
                        <Text text="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."  variant="text-delete"></Text>
                    </Box>
                </ModalBody>
            <Box>
            <ModalFooter>
                <Button onClick={onClose} variant="exclude/cancel-announcement" size="small-auto" text="Cancelar"></Button>
                <Button onClick={async()=>{
                    await deleteAnnouncement(props.vehicle_id)
                    setAnnouncements((old)=>{
                        const copy = [...old]
                        const findIndex = copy.findIndex((el)=> el.id == props.vehicle_id)
                        copy.splice(findIndex,1)
                        return copy
                    })
                }} variant="exclude-announcement" size="small-auto" text="Sim, excluir anúncio"></Button>
            </ModalFooter>
            </Box>
            </ModalContent>
        </Modal>
        </>
    )
}