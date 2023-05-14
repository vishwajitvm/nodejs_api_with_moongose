const mongoose = require('mongoose') ;
//SCHEMA
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String
}) ;

//MODEL anbd EXPORT
module.exports =  mongoose.model("products" , productSchema) ;

