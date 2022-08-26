const express = require("express");
const Cart = require("../Schema/cartSchema");
const cartRouter = express.Router();

cartRouter.post('/add', async(req, res)=>{
    //  console.log('In router reqbody :',req.body);

     try {
        const cartItem = await Cart.create({
            Items: req.body.curID,
            totalAddItems: req.body.quantity,
        })
        console.log('cart Item',cartItem);

        // console.log(totalAddItems);
        
     } catch (error) {
        console.log(error);
        // res.status(400).json({
        //     "message" : "Cart Insertion Failed!",
        // })
        
     }
})

cartRouter.get('/get', async(req, res) => {
    try{
        const cartProd = await Cart.find();
        if(cartProd){
            res.status(200).send(cartProd);
        }
    }catch(error){
        res.status(500).send(error)
    }
})

cartRouter.delete('/del/:id', async(req, res) => {
    try{
        const id = req.params.id;
        console.log('requested id:',id);
        let remProd = await Cart.remove({_id:id});
        res.status(200).json({
            status: true,
            data: remProd,
        })
    }catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
})

module.exports = cartRouter;