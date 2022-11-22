import {Request, Response, NextFunction} from "express";
import {ENVIRONMENT} from "./../configs"

export const logger = (req: Request, res: Response, next: NextFunction) => {
  if (ENVIRONMENT && ENVIRONMENT === "development") {
    console.log("Request URL: ", req.url)
    console.log("Request Headers: ", req.headers)
    console.log("Request Payload: ", req.body)
  }

  next()
}