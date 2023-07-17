const sleep = require('../models/sleepModel');

exports.sleepDetails = async (req,res,next)=>{
    const data = await sleep.find();

    res.status(200).json({
        status:true,
        data
    })
}

