const express = require('express')

const {registerUser,loginUser,logout,getUserDetails,getAllUser,deleteUser,updateProfile,updatePassword} = require('../controller/userController');
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth')
const {meditationDetails,addMeditation} = require('../controller/meditationController')
const {addMentalDisorderDetail,mentalDisorderDetails} = require('../controller/mentalDisorderController');
const {sleepDetails} = require('../controller/sleepController');
const {getQuotes} = require('../controller/quotesController');
const {musicDetails} = require('../controller/musicController');

const router = express.Router();

router.get('/users',(req,res)=>{
    res.json({
        status:'success',
        route:'user',
    })
});

router.get('/checking',(req,res)=>{
    res.json({
        status:true,
        msg:"every thing is fine",
        route:"user"
    })
})



router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',isAuthenticatedUser,logout);
router.route('/me').get(isAuthenticatedUser,getUserDetails);
router.route('/password/update').put(isAuthenticatedUser,updatePassword);
router.route('/me/update').put(isAuthenticatedUser,updateProfile);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles(),getAllUser);
router.route('/admin/user/:id').delete(isAuthenticatedUser, authorizeRoles(),deleteUser);


// meditation api
router.get('/meditationDetails',meditationDetails);
router.post('/meditationDetails',addMeditation);


// mentalDisorder
router.get('/mentalDisorderDetails',mentalDisorderDetails);
router.post('/mentalDisorderDetails',addMentalDisorderDetail);


// sleep
router.get('/sleepDetails',sleepDetails);

// quotes
router.get('/getQuotes',getQuotes);

// music
router.get('/musicDetails',musicDetails);


module.exports  = router;