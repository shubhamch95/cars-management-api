const mongoose = require('mongoose');
const data = mongoose.Schema({
    brand: String,
    type: String,
    year: Number,
    price: Number,
    color: String
});
module.exports = mongoose.model("cars",data)