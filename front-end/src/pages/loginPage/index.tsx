import { Flex, Button, Box, useToast } from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar";
import { customTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/login.schema";
import { loginUser } from "../../utils/user.util";

export const LoginPage = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });
  const toast = useToast();

  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Flex alignItems={"center"} justifyContent={"center"}>
        <form
          className="loginForm"
          onSubmit={handleSubmit(async (data) => {
            const response = await loginUser(data);
            if (response?.message == "success") {
              localStorage.setItem("$TOKEN", response.token);
              isValid &&
                toast({
                  position: "top-right",
                  title: "Logado com sucesso!",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              navigate("/home");
            }
            if (response?.message == "error") {
              toast({
                position: "top-right",
                title: "Email ou senha incorretos.",
                description: "Por favor, revise os dados.",
                status: "error",
                duration: 4000,
                isClosable: true,
              });
            }
          })}
        >
          <Flex
            mt={"1rem"}
            mb={"1rem"}
            flexDirection={"column"}
            alignItems={"center"}
            className="LoginFormContainer"
            width={"412px"}
            height={"auto"}
            bg={customTheme.colors.greyScale.grey8}
            padding={"2rem"}
          >
            <Flex
              mb={"1rem"}
              width={"100%"}
              justifyContent={"flex-start"}
              className="loginFormTtle"
            >
              <Text text="Login" variant="title-card"></Text>
            </Flex>
            <Flex
              className="loginFormInput"
              width={"90%"}
              height={"auto"}
              gap={"0.5rem"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"left"}
              justifyContent={"space-around"}
            >
              <InputText
                register={{ ...register("email") }}
                text="Email"
                placeholder="Digitar Email"
              ></InputText>
              {errors.email?.message && (
                <Text
                  text={errors.email.message as string}
                  variant="errors-form"
                ></Text>
              )}
              <InputText
                type={"password"}
                register={{ ...register("password") }}
                text="Senha"
                placeholder="Digitar senha"
              ></InputText>
              {errors.password?.message && (
                <Text
                  text={errors.password.message as string}
                  variant="errors-form"
                ></Text>
              )}
              <Button
                mt={"0.5rem"}
                mb={"0.5rem"}
                border={"none"}
                alignSelf={"flex-end"}
                onClick={() => {
                  navigate("/user/password");
                }}
              >
                Esqueci minha senha
              </Button>
            </Flex>
            <Flex
              className="loginFormBtn"
              width={"90%"}
              height={"auto"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              gap={"1rem"}
            >
              <Button
                width={"100%"}
                height={"45px"}
                variant={"create-announcement:enable"}
                type="submit"
              >
                Entrar
              </Button>
              <Text
                variant="car-description"
                text="Ainda não possue uma conta?"
              ></Text>
              <Button
                width={"100%"}
                height={"45px"}
                variant={"open-modal-announcement"}
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </>
  );
};
