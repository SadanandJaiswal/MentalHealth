

// const sendToken = (user,statuscode,res)=>{

//     const token = user.getJWTToken();

//     // option for cookie
//     const options = {
//         expires:new Date(
//             Date.now() + 5*24*60*60*1000
//             ),
//         httpOnly:true,
//     };

//     res.status(statuscode).cookie('token',token,options)
//     .json({
//         success:true,
//         user,
//         token
//     });
// }

const sendToken = (user, statuscode, res, isLocalhost) => {
    const token = user.getJWTToken();
  
    // Determine the appropriate domain based on the environment
    // const domain = isLocalhost ? "localhost" : "jeevanbandhu.netlify.app";
  
    // Options for cookie
    const options = {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    
    // domain: "*", // Set the domain based on the environment
    // // secure: !isLocalhost, // Set to true for production (HTTPS)
    // secure: true,
    // sameSite: "None", // You can keep this as "None" for cross-site access with HTTPS

    res
      .status(statuscode)
      .cookie("token", token, options)
      .json({
        success: true,
        user,
        token,
      });
};

  
module.exports = sendToken;