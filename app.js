import express from "express";

export const app = express()
import cors  from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

import { ErrorMiddleware } from "./middleware/error.js";
import  userRoute  from "./routes/userRoute.js";


dotenv.config()



app.use(express.json({limit:"50mb"}))
app.use(cookieParser())
app.use(cors())

// routes
app.use("/api/v1",userRoute)

// testing api
app.get("/test",(req,res,next)=>{
    res.status(200).json({
        message:"this is test route",
        success:true
    })
})



// unnone route
app.all("*",(req,res,next)=>{
    const err = new Error("Route not valied !")
    err.statusCode = 404;
    next(err)
})

app.use(ErrorMiddleware)