const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    link:{type:String}
})


module.exports = mongoose.model('musics',musicSchema);