const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.find({})
    res.json(users)
});

module.exports = {getUsers}