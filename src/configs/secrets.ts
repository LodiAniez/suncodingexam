import {config} from "dotenv"

config()

type ENV = "development"

export const PORT: undefined | string = process.env.PORT
export const APIKEY: undefined | string = process.env.APIKEY
export const ENVIRONMENT: undefined | ENV = process.env.NODE_ENV as ENV