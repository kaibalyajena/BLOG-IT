const router = require("express").Router();
const User = require("../models/User.js")
const bcrypt=require("bcrypt")

//register
router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newUser = new User(
            {
                username:req.body.username,
                email:req.body.email,
                password:hashedPass
            }
        )
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//login
router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("wrong credentials")
        
        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("wrong credentials")

        const {password, ...others} = user._doc;
        res.status(200).json(others)
    }catch(err){
        // res.status(500).json(err)
        console.log(err)
    }
})



// module.exports=router

// command to install - npm i express mongoose dotenv multer

// express for server

// mongoose for connecting with mongodb database

// dotenv for hiding the credentials in the folder of mongodb cloud

// multer for adding and handling photos and all.

// In mongodb altas we need to create a shared cluster and then connect with your application

// postman is used for api testing

// npm init to install node js

// control c to exit npm start from the terminal

// nodemon is used to change the terminal while running npm start whenever we change something

// .env file is used to hide something like database url etc.

// bcrypt library used to encrypt passwords that go in the database

// jwt — json web talking

// `sudo killall -9 node` — this command is used to kill all node express servers( when error occurs that server is already in use)

// multer — used for adding images in out api

// npm i react-router-dom — for the routes and stuff

// axios library is used to fetch data