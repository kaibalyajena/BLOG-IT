const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
}).then(console.log("connected to mongodb")).catch(err=>console.log(err));


app.use("/hello",(req,res)=>{
    console.log("working on the helloo hello website")
})

app.listen("3000",()=>{
    console.log("the backend is running hello my friends what is up bro")
})