const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const crypto = require("crypto");

// register a user
// exports.registerUser = async(req,res,next)=>{
//         const {name,email,password} = req.body;
//         const user = await User.create({
//             name,email,password,
//             avatar:{
//                 public_id:"this is a sample id",
//                 url:"profilepicUrl"
//             }
//         });
        
//         sendToken(user,201,res);
//         console.log('user registered successfully')
// }

exports.registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "this is a sample id",
        url: "profilepicUrl",
      },
    });
  
    // Determine if the request is coming from localhost or the deployed domain
    const isLocalhost = req.headers.origin.includes("localhost");
  
    sendToken(user, 201, res, isLocalhost);
    console.log('user registered successfully');
  };
  

// login a user
exports.loginUser = async (req,res,next)=>{
    const {email,password} = req.body;

    if(!email || !password)
    {
        return next(new ErrorHander("Please Enter Email and Password"))
    }

    const user = await User.findOne({email}).select("password");

    if(!user)
    {
        return next(new ErrorHander("Invalid email or password"));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched)
    {
        return next(new ErrorHander("Invalid email or password"));
    }

    const isLocalhost = req.headers.origin.includes("localhost");
    
    sendToken(user, 201, res, isLocalhost);

    console.log('successfully login')
}


// logout 
exports.logout = async(req,res,next)=>{

    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.cookie('userData',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    console.log('user logged out successfully')
    res.status(201).json({
        success:true,
        message:'user logged out successfully'
    })
}


// get user details
exports.getUserDetails = async(req,res,next)=>{
    const user = await User.findById(req.user.id);
    res.status(201).json({
        status:true,
        user,
        res_id: req.user.id,    // user here is from auth (req.user)
    })
}

// get all users
exports.getAllUser = async(req,res,next)=>{

    const users = await User.find();

    res.status(200).json({
        success:true,
        users,
    })
}

// update user password
exports.updatePassword = async(req,res,next)=>{
    const user = await User.findById(req.user._id).select("password");
    
    const isPasswordMatched = user.comparePassword(req.body.oldpassword);

    if(!isPasswordMatched)
    {
        return next(new Error("old password is incorrect",400));
    }

    if(req.body.newPassword != req.body.confirmPassword){
        return next(new Error("Password doesnt matched",400));
    }

    user.password = req.body.newPassword;
    user.save();

    sendToken(user,200,res);
}


// update user profile
exports.updateProfile = async(req,res,next)=>{
    const newData = {
        name:req.body.name,
        email:req.body.email,
    }

    const user = await User.findByIdAndUpdate(req.user.id,newData,{
        new:true,
    });

    res.status(200).json({
        success:true,
        user
    })

}


// delete user profile (admin)
exports.deleteUser = async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user)
    {
        return next(new Error("user does not exist with this id"));
    }

    await User.deleteOne(user);
    res.status(200).json({
        success:true,
        message:"user deleted successfully",
        user
    })
}


// forget password

// reset passord