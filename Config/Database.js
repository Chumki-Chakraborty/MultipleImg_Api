const mongoose=require("mongoose")

const ConnectDb=async(req,res)=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb Connected ${conn.connection.host}`);
    }catch(error){
        console.log(`Mongodb not Connected ${error}`);
    }
}
module.exports=ConnectDb
