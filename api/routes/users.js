const router = require("express").Router();
const User = require("../models/User.js")
const Post= require("../models/Post.js")
const brcrpt=require("bcrypt");

//update
router.put("/:id",async(req,res)=>{
    if(req.body.userId==req.params.id){
        if(req.body.password){
            salt=await brcrpt.genSalt(10);
            req.body.password=brcrpt.hash(req.body.password,salt)
        }
        try{
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedUser)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("you can update only your account")
    }
})

//delete
router.delete("/:id",async (req,res)=>{
    if(req.body.userId==req.params.id){
        try{
            const user = await User.findById(req.params.id)
            try{
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been delted")
    
            }catch(err){
                res.status(500).json(err)
            }

        }catch(err){
            res.status(404).json("user not found")

        }
    }else{
        res.status(401).json("you can only delete your account")
    }
    
})

//get user
router.get("/:id",async (req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        const {password,...others}=user._doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=router