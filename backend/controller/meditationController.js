const meditation = require('../models/meditationModal')

exports.meditationDetails = async (req,res,next)=>{
    const data = await meditation.find();

    res.status(200).json({
        status:true,
        data
    })
}


exports.addMeditation = async (req,res,next) =>{
    const {id,name,category,steps,benefits,problems,videoUrl} = req.body;

    const data = await meditation.create({
        id,name,category,steps,benefits,problems,videoUrl
    })

    res.status(200).json({
        status:true,
        data
    })

    console.log('meditation added to db')
}