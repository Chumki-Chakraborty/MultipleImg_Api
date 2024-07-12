const express=require("express")
const ApiController = require("../Controller/ApiController")

const ApiRouter=express.Router()
const multiimg=require("../Utilits/MultiImg_Upload")

ApiRouter.post("/AddData",multiimg.array("image",2),ApiController.AddData)
ApiRouter.get("/getdata",ApiController.GetData)
ApiRouter.get("/edit/data/:id",ApiController.EditData)
ApiRouter.post("/update/data/:id",multiimg.array("image",2),ApiController.UpdateData)
ApiRouter.get("/delete/data/:id",ApiController.DeleteData)

module.exports=ApiRouter
