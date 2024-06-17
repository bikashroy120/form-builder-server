
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";


dotenv.config


app.listen(8000,()=>{
    console.log("server is running ")
    connectDB()
})
