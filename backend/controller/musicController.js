const music = require('../models/musicModel');

exports.musicDetails = async(req,res,next)=>{
    const data = await music.find();

    res.status(200).json({
        status:true,
        data
    })
}


