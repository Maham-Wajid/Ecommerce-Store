const express = require("express");
const Product = require("../Schema/productSchema");
const router = express.Router();

router.post('/send' , async (req , res)=>{
    const sendData = await Product.insertMany(req.body)

    try{
        // await sendData.save();
        res.status(200).json({
            "message" : "Inserted Successfully!",
        })
    }
    catch{
        res.status(400).json({
            "message" : "Insertion Failed!",
        })
    }
})

router.get('/get', async (req, res)=>{
    try{
        const Products = await Product.find();
        res.status(200).send(Products)
    }catch(error){
        res.status(500).send(error)
    }

})

router.get('/get/:id', async (req, res)=>{
    try{
        //console.log("HWllo tyr")
        const product = await Product.findById({_id:req.params.id});
        if(product){
            res.status(200).send(product)
        } 
    }catch(error){
        console.log("HEllo")
        res.status(400).send(error);
    }
})

module.exports = router;