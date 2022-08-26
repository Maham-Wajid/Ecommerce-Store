const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router/productRouter');
const cartRouter = require('./Router/cartRouter');

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/ecommerce' , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("DB Connected")
    }
})

//router
app.use('/product', router)
app.use('/cart', cartRouter)

app.listen(4000 , ()=>{
    console.log(`We are listening you at http://localhost:4000`)
})