const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const asyncHandler = require ('express-async-handler');

const protect = asyncHandler(async (req, res, next) =>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
                    //Get Token From Header
        token = req.headers.asyncHandler.split(' ')[1];

        //verify the token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        //Get User From token
        req.admin = await Admin.findById(decoded._id).select("-password");
        next();
        }catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    }
    if (!token) {
    res.status(401);
    throw new Error("Not authorized, No token");
    }
});



module.exports = {protect};