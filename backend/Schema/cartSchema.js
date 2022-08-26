const { default: mongoose } = require("mongoose");
const Product = require("./productSchema");

const cartSchema = new mongoose.Schema({
    Items: [
        {
            title: {
                type: String,
                required: true,
            },
        
            price: {
                type: Number,
                required: true,
            },
        
            description: {
                type: String,
            },
        
            category: {
                type: String,
                required: true,
            },
        
            image: {
                type: String,
                required: true,
            },
        }    
    ],
    totalAddItems: {
        type: Number,
        default: 0,
    }
})

const Cart = new mongoose.model("Cart", cartSchema);
module.exports = Cart;