const express =require('express');
const app = express();
require("dotenv").config()
const cors= require("cors")

const users=require("./routers/user")
const dbConnection=require("./databaseConnection/databaseDetails")

const origin=process.env.ORIGIN || "http://localhost:5173"
app.use(cors({
    origin:origin,
    allowedHeaders:["content-type","authorization"],
    methods:"get,post",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api",users)











dbConnection.connect((err)=>{
   
    if(err){
        console.log(err)
    }else{
        console.log("connected to database 3306")
        app.listen(4000,(error)=>{
            if(error){
                console.log("error running the server at port 4000 - server.js"+ err)
            }else{
                console.log("server running at port 4000")
            }
         
        })
    }


})


