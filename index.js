const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const MongodbConnection=require("./Config/Database")
MongodbConnection()
app.use("/upload",express.static("upload"))
// ---------------ApiRouter---------------------//
const ApiRouter=require("./Router/ApiRouter")
app.use(ApiRouter)
const port=2024
app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`);
})