import { ErrorResponse } from "./../Error/ErrorResponse";
import {
  ILoginRequest,
  IUserCreate,
  IUserUpdateRequest,
} from "./../interfaces/requests.interface";
import { Response, Request } from "express";
import { IUserRequest } from "../interfaces/requests.interface";
import {
  activateUserService,
  userCreateService,
  userDeleteService,
  userListSpecificProfileService,
  userListSpecificService,
  userLoginService,
  userUpdateService,
} from "../services/user.service";

import { instanceToPlain } from "class-transformer";

export async function userLoginController(req : ILoginRequest,res : Response){
  try {
    const data = req.data;
    const response = await userLoginService(data)
    return res.json(response).status(200);
  } catch (err) {
    if (err instanceof ErrorResponse) {
      return res.status(err.status_code).json({message : err.message})
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}

export async function userCreateController(req: Request, res: Response) {
  try {
    const {
      accountType,
      full_name,
      email,
      cpf,
      phone,
      birthDate,
      description,
      password,
    }: IUserCreate = req.body;

    const { address } = req.body;
    const protocol = req.protocol;
    const host = req.get("host"); //o host pode ser localhost do front para reset de senha

    const createdUser = await userCreateService(
      {
        accountType,
        full_name,
        email,
        cpf,
        phone,
        birthDate,
        description,
        password,
      },
      address,
      protocol,
      host
    );

    return res.status(201).json(instanceToPlain(createdUser));
  } catch (err) {
    if (err instanceof ErrorResponse) {
      return res.status(err.status_code).json({ message: err.message });
    }
    return res.json({ message: err.message }).status(500);
  }
}

export async function userDeleteController(req: IUserRequest, res: Response) {
  try {
    const id = req.user_id;
    await userDeleteService(id);
    const message = { message: "User has been deactivated" };
    return res.json(message).status(200);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}
export async function userListSpecificController(
  req: IUserRequest,
  res: Response
) {
  try {
    const id = req.params.id;
    const response = await userListSpecificService(id);
    return res.json(response).status(200);
  } catch (err) {
    if (err instanceof Error) {
      return res.json({ message: err.message }).status(400);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}
export async function userListSpecificProfileController(
  req: IUserRequest,
  res: Response
) {
  try {
    const user_id = req.user_id
    const response = await userListSpecificProfileService(user_id);
    return res.json(response).status(200);
  } catch (err) {
    if (err instanceof Error) {
      return res.json({message : err.message}).status(400);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}

export const userUpdateController = async (
  req: IUserUpdateRequest,
  res: Response
) => {
  try {
    const id = req.user_id;

    const data = req.data;

    const userUpdated = await userUpdateService(id, data);

    return res.status(200).send(userUpdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const activateUserController = async (req: Request, res: Response) => {
  const tokenActivated = req.params.token_activation;

  await activateUserService(tokenActivated);

  return res.status(200).redirect("http://localhost:5173/login");
};
