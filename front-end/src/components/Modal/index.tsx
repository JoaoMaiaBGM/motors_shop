import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface IModalExample {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalExample({ isOpen, onClose }: IModalExample) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sucesso!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            <strong> Sua conta foi criada com sucesso!</strong>
          </p>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Ir para o Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
