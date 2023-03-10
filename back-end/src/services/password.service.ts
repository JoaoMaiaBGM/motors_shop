import { IResetPasswordData } from "./../interfaces/resetPassword.interface";
import bcrypt from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/user";
import { AppError } from "../Error/ErrorResponse";
import { IEmailRequest } from "../interfaces/email.interface";
import { sendEmail } from "../utils/mailer.util";
import { generateRandomPassword } from "../utils/password.util";

export const sendResetUserPasswordService = async (
  email: string,
  protocol: string,
  host: string | undefined
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const resetPasswordToken = generateRandomPassword();

  await userRepository.update(
    {
      id: user.id,
    },
    {
      token_reset_password: resetPasswordToken,
    }
  );

  const emailData: IEmailRequest = {
    subject: "Alteração de senha",
    text: `<h1>Alteração de senha</h1> 
    <p>Prezado(a) ${user.full_name}.</p> 
    <p>Esse e-mail é automatico então por favor, não responda.</p> 
    <P>Recebemos um pedido de alteração de senha. Caso não tenha sido você,</p> 
    <p>favor entrar em contato com a adminstração do sistema, através do email maiapemaia@hotmail.com.</P>
    <p>acesse o link para alterar a senha: ${protocol}://localhost:5173/user/resetpassword/${resetPasswordToken}</P> 
    <b><h4>Atenciosamente</h4> <h4>Equipe de suporte 💻</h4></b>`,
    to: email,
  };

  await sendEmail(emailData);
};

export const resetUserPasswordService = async (
  token: string,
  password
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      token_reset_password: token,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  await userRepository.update(
    {
      id: user.id,
    },
    {
      token_reset_password: "",
      password: bcrypt.hashSync(password, 10),
    }
  );
};
