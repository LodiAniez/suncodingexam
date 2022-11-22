import {Router} from "express"
import {YouTubeController} from "./../controllers"

const app: Router = Router()

const {SEARCH_VIDEO} = YouTubeController

app.post("/search", SEARCH_VIDEO)

export default app