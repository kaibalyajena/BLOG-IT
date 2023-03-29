const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts");
const categoryRoute= require("./routes/categories")
const multer = require("multer")
const path = require("path")
dotenv.config()
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
}).then(console.log("connected to mongodb")).catch(err=>console.log(err));

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images")
    },
    filename: (req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("the image has been uploaded")
})

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)

app.listen("4000",()=>{
    console.log("the backend is running")
})



//connect to mongodb
// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url)

// async function getData(){
//     let result = await client.connect()
//     let db=result.db('mydb')
//     let collection=db.collection('customer')
//     let response=await collection.insertOne({name:"vd",age:50});
//     // console.log(response)
// }

// getData();