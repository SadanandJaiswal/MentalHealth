const mentalDisorderSchema = require('../models/mentalDisorderModel');


exports.mentalDisorderDetails = async (req,res,next)=>{
    const data = await mentalDisorderSchema.find();

    res.status(200).json({
        status:true,
        data
    })
}


exports.addMentalDisorderDetail = async (req,res,next) =>{
    const {id,name,category,steps,benefits,problems,videoUrl} = req.body;

    const data = await mentalDisorderSchema.create({
        imageUrl,name,title,description,what_is,Symptoms,strategies
    })

    res.status(200).json({
        status:true,
        data
    })

    console.log('meditation added to db')
}