import { Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export class ErrorResponse {
  message: string;
  status_code: number;

  constructor(message: string, status_code: number = 400) {
    this.message = message;
    this.status_code = status_code;
  }
}
