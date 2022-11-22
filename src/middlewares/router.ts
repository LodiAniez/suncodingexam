import { Express } from "express";
import {YouTube} from "./../models"

export const router = (app: Express) => {
  app.use("/", YouTube)
}