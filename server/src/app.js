import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())  //limit can be added ... .json(limit: "16kb")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(cookieParser());


//routes
import userRouter from './routes/user.routes.js'
import foodRouter from './routes/food.routes.js'
// import { home } from "./controllers/user.controller.js";
// app.route("/").get(home)
app.use("/api/users",userRouter)
app.use("/api/food",foodRouter)

export { app }