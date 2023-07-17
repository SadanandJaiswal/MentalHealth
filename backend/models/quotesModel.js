const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    id:{type:String},
    author:{type:String},
    urlToImage:{type:String},
    category:{type:String}
})


module.exports = mongoose.model('quotes',quoteSchema);