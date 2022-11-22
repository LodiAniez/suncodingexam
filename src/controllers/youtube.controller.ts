import {Request, Response} from "express"
import {ErrorException} from "./../utils"
import {Endpoints} from "./../constants"
import {APIKEY} from "./../configs"
import axios from "axios"

interface ISearchVideo {
  q: string;
}

export const YouTubeController = {
  SEARCH_VIDEO: async (req: Request, res: Response) => {
    try {
      const {q}: ISearchVideo = req.body as ISearchVideo

      if (!q) throw new ErrorException("Query string is required.")

      const searchResponse = await axios.get(`${Endpoints.YOUTUBE}/search`, {
        params: {
          part: "snippet", 
          q, key: APIKEY
        }
      })

      res.status(200).send(searchResponse.data)
    } catch (err) {
      const error: ErrorException = err as ErrorException

      res.status(error.code).send({
        message: error.message ?? "Internal Server Error"
      })
    }
  }
}

// ejanton.potot@sun-asterisk.com