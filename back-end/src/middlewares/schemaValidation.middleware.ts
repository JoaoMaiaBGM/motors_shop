import { ValidationError, AnyObject } from "yup";
import { NextFunction, Response, Request } from "express";
import { ISchemaRequest } from "../interfaces/requests.interface";

export function schemaValidationMiddleware(schema: AnyObject) {
  return async function (
    req: ISchemaRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = req.body;
      const schemaValidated = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.data = schemaValidated;
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const { errors } = err;

        return res.status(400).json({ message: errors });
      }
    }
  };
}
