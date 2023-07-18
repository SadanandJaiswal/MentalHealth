const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");

const connectDatabase = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL,
        // mongoose.connect("",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(
            (data)=>{
                // console.log('connection successfully created to db')
                console.log('connection successfull to atlas clouds MentalHealth Database');
            }
        )
    } catch (err) {
        console.log('there is error in database connection');
        console.log(e);
        
    }
};

module.exports = connectDatabase;
