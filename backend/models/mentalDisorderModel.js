const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const mentalDisorderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    what_is:{
        type:String,
        required:true
    },
    Symptoms:[
        {
            type:String,
            required:true
        }
    ],
    strategies:[
        {
            type:String,
            required:true
        }
    ]
})

module.exports = mongoose.model('mentalDisorder',mentalDisorderSchema);