const mongoose=require("mongoose")

const schema=mongoose.Schema

const UserSchema=new schema({
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    image:{
        type:Array,
        required:[true,"image is required"]
    },
    status:{
        type:String,
        default:1
    }
})

const UserModel=mongoose.model('user',UserSchema)
module.exports=UserModel