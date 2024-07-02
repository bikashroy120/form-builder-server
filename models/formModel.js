import mongoose from "mongoose";


const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    description:{
        type:String
    },
    published:{
        type:Boolean,
        default:false,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:[],
    visits:{
        type:Number,
    },
    submission:{
        type:Number,
    },
    shareUrl:{
        type:String,
    }
    
},{timestamps:true})

const formModal = mongoose.model("Form",formSchema)

export default formModal