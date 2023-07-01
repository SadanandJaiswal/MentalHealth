const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const ErrorHander = require("../utils/errorhandeler");


exports.isAuthenticatedUser = async(req,res,next)=>{
    const {token} = req.cookies;

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTliM2Q4MGRlYzUwZjA1ZWRmMzU2NSIsImlhdCI6MTY4Nzc5NDY0OSwiZXhwIjoxNjg3Nzk0NjU5fQ.EIUsqW8Wl-ukeOChGIWT8o68rYgc8gvR-KDW_STxa5s";

    if(!token){
        return next(new Error("Please Login to access this resource"));
    }   

    const decodedData = jwt.verify(token,"ljklkj237847sdfujdssd@$#$%#$%jsdfj289")
    req.user = await User.findById(decodedData.id);
    console.log(token);
    next();
};

// isAuthenticatedUser();

exports.authorizeRoles = ()=>{
    return (req,res,next)=>{
        if(req.user.role != 'user')
        {
            return next(new Error("Role is not a authorisez user for content of this page"))
        }
        next();
    }
}