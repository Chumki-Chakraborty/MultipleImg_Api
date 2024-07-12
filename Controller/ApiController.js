const UserModel=require("../Model/UserModel")
const path=require("path")
const fs=require("fs")

class MultiImg_Controller{
    
    AddData=async(req,res)=>{
        try{
            const {description}=req.body
            const NewImg=req.files.map((file)=>file.path)
            const adddata=new UserModel({
                description,image:NewImg
            })
            
           const SaveData=await adddata.save()
           if(SaveData){
            return res.status(201).json({
                message:"Data added successfully",
                Data:SaveData
            })
           }

        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // ----------------------GetData---------//
    GetData=async(req,res)=>{
        try{
            const AllData=await UserModel.find()
            if(AllData){
                return res.status(201).json({
                    message:"All Data get done",
                    Data:AllData
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // ----------------------EditData------------//
    EditData=async(req,res)=>{
        try{
            const id=req.params.id
            const editdata=await UserModel.findById(id)
            if(editdata){
                return res.status(201).json({
                    message:"Data has been edited",
                    data:editdata
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })  
        }
    }
    // ----------------UpdateData------------//
    UpdateData=async(req,res)=>{
        try{
            const id=req.params.id
            const {description}=req.body
            const NewImg=req.files.map((file)=>file.path)
            const DuplicateImg=await UserModel.findById(id)
            DuplicateImg.image.forEach((img)=>{
                fs.unlinkSync(img)
            })
            const updatedata=await UserModel.findByIdAndUpdate(id,{
                description,image:NewImg
            },{new:true})  
            if(updatedata){
                return res.status(201).json({
                    message:"Data has been updated",
                    Data:updatedata
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    //--------------DeleteData-------------//
    DeleteData=async(req,res)=>{
        try{
            const id=req.params.id
           
            const deletedata=await UserModel.findByIdAndUpdate(id,{status:0})
            deletedata.image.forEach((img)=>{
                fs.unlinkSync(img)
            })
            if(deletedata){
                return res.status(201).json({
                    message:"Data has been deleted ",
                    data:deletedata
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
}
module.exports=new MultiImg_Controller()