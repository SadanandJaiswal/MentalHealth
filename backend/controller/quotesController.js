const quotes = require('../models/quotesModel');
// const quotes = require('')

exports.getQuotes = async(req,res,next)=>{
    const data = await quotes.find();

    // console.log(data);

    res.status(200).json({
        status:true,
        data
    })
}


