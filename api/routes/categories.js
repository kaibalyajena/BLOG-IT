const router = require("express").Router()
const Category = require("../models/Category")
const { route } = require("./auth")

//create category
router.post("/",async (req,res)=>{
    const new_category=new Category(req.body)
    try{
        const saved_category=await new_category.save()
        res.status(200).json(saved_category)
    }catch(err){
        res.status(500).json(err)
    }
})

//get all categories
router.get("/",async(req,res)=>{
    try{
        const categories=await Category.find()
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router
