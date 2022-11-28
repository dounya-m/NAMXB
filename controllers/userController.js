const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { param } = require('../routes/usersRoutes');

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    res.json(users)
});

const addUser = asyncHandler(async(req,res) => {
    const salt = await bcrypt.genSalt(10)

    if(!req.body.name || !req.body.phone || !req.body.email || !req.body.password){
            res.status(400).json({message:'this text is required'})
    }
    
    const user = await User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    })
    user.password = await bcrypt.hash(user.password, salt);
    user.save();

    res.status(200).json({user, token: generetToken(user._id)})
});

const login = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        res.status(400).json({message: 'this user dont exist'})
    }
    if(email && (await bcrypt.compare(password, user.password))){
        res.json({user, token: generetToken(user._id)})
    }
    res.json('is logged')
});

const deletUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params._id)
    if(!user){
        res.status(400).json({message: 'this user dont exist'})
    }
    await User.findByIdAndDelete(req.params._id)
    res.status(200).json({message: 'user hase been deleted'})
})

const generetToken = (id) => {
    const accssToken = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
    return({accssToken})
}

module.exports = {getUsers, addUser, login, deletUser}