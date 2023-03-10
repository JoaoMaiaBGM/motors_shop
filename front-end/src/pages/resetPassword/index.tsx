import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
  Text,
} from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../schemas/password.schema";
import { resetPassword } from "../../utils/password.util";

export const ResetPasswordPage = (): JSX.Element => {
  const { tokenResetPassword } = useParams();

  const toast = useToast();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  return (
    <>
      <NavBar />
      <form
        className="resetPasswordForm"
        onSubmit={handleSubmit(async (data) => {
          const response = await resetPassword(
            data,
            tokenResetPassword as string
          );
          if (response?.message == "success") {
            setTimeout(() => {
              navigate("/login");
              toast({
                position: "top-right",
                title: "Senha redefinida com sucesso.",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }, 5000);
          } else {
            setTimeout(() => {
              navigate("/user/password");
              toast({
                position: "top-right",
                title: "Senha não redefinida.",
                description: "Por favor, tente novamente.",
                status: "error",
                duration: 4000,
                isClosable: true,
              });
            }, 5000);
          }
        })}
      >
        <Flex
          minH={"lg"}
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
              Redefina sua senha
            </Heading>

            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                placeholder="Digitar nova senha"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("password")}
              />
              <Text variant="errors-form">
                {errors.email?.message as string}
              </Text>
            </FormControl>

            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                type="password"
                placeholder="Confirmar nova senha"
                _placeholder={{ color: "gray.500" }}
                {...register("confirmPassword")}
              />
              <Text variant="errors-form">
                {errors.confirmPassword?.message as string}
              </Text>
            </FormControl>

            <Stack spacing={6}>
              <Button
                type={"submit"}
                variant={
                  isValid
                    ? "create-announcement:enable"
                    : "create-announcement:disable"
                }
              >
                Enviar
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </form>
      <Footer />
    </>
  );
};
