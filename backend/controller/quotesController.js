const quotes = require('../models/quotesModel');

exports.getQuotes = async(req,res,next)=>{
    const data = await quotes.find();

    res.status(200).json({
        status:true,
        data
    })
}


