const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const meditationSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        // required:[true,"Please Enter your Name"],
    },
    category:{
        type:String,
        // required:[true,"Please Enter your Name"],
    },
    steps:[
        {
            type:String
        }
    ],
    benefits:[
        {
            type:String
        }
    ],
    problems:[
        {
            type:String
        }
    ],
    videoUrl:{
        type:String
    }
})

module.exports = mongoose.model('meditation',meditationSchema);