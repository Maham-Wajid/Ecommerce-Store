const { default: mongoose } = require("mongoose");

// schema 
const productSchema = new mongoose.Schema({
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

})


const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
