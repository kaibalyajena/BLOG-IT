const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
dotenv.config()
app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
}).then(console.log("connected to mongodb")).catch(err=>console.log(err));


app.use("/api/auth",authRoute)

app.listen("3000",()=>{
    console.log("the backend is running")
})