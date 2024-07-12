const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload")
    },
    filename:(req,file,cb)=>{
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

const MultiImgUpload=multer({
    storage:storage,
    // fileFilter:(req,file,cb)=>{
    //     if(
    //         file.mimetype=="image/png"||
    //         file.mimetype=="image/jpg"||
    //         file.mimetype=="image/jpeg"
    //     ){
    //         cb(null,true)
    //     }else{
    //         console.log(`Please select valid file format`);
    //         cb(null,false)
    //     }
    // },limits:{
    //     fieldSize:1024*1024*2
    // }
})

module.exports=MultiImgUpload
