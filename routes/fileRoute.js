import express from "express"
import { upload } from "../services/uploder.js"


const router = express.Router()

router.post("/upload",upload.single("avatar"), async(req,res,next)=>{

    console.log(req.file)

    res.status(200).json({
        status:"success",
        message:"file upload success",
    })
})


export default router