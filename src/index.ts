import express from "express"
import type { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
	res.send("Home Page")
})

app.listen(8000, (): void => {
	console.log("Server running!")
})
