const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
    id:{
        type:String
    },
    name:{type:String},
    image:{type:String},
    content:{type:String}
})


module.exports = mongoose.model('sleep',sleepSchema);