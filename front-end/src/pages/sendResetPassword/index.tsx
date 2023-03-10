import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { sendResetPasswordSchema } from "../../schemas/password.schema";
import { sendResetPasswordToken } from "../../utils/password.util";

export const SendResetPasswordPage = (): JSX.Element => {
  const toast = useToast();

  const navigate = useNavigate();

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(sendResetPasswordSchema) });

  return (
    <>
      <NavBar />

      <form
        className="sendResetPasswordForm"
        onSubmit={handleSubmit(async (data) => {
          const response = await sendResetPasswordToken(data);
          if (response?.message == "success") {
            setTimeout(() => {
              toast({
                position: "top-right",
                title: "Email enviado.",
                description: "Por favor, acesse o link no email",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }, 5000);
          } else {
            toast({
              position: "top-right",
              title: "Email não enviado.",
              description: "Por favor, revise os dados.",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          }
        })}
      >
        <Flex
          minH={"md"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Esqueceu sua senha?
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              color={useColorModeValue("gray.800", "gray.400")}
            >
              Nós lhe enviaremos um link de redefinição
            </Text>
            <FormControl id="email">
              <Input
                placeholder="Ex.: email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email")}
              />
              <Text variant="errors-form">
                {errors.email?.message as string}
              </Text>
            </FormControl>
            <Stack spacing={6}>
              <Button
                width={"100%"}
                variant={
                  isValid
                    ? "create-announcement:enable"
                    : "create-announcement:disable"
                }
                type={"submit"}
              >
                Redefinir
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </form>

      <Footer />
    </>
  );
};
