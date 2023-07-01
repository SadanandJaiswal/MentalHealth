// const dotenv = require('dotenv');
// dotenv.config();

const mongoose = require("mongoose");

const connectDatabase = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/MentalHealth',
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(
            (data)=>{
                console.log('connection successfully created to db')
            }
        )
    } catch (err) {
        console.log('there is error in database connection');
        console.log(e);
        
    }

};
module.exports = connectDatabase;
