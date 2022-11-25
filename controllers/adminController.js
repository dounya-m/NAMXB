const asyncHandler = require('express-async-handler')
const Admine = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {body, validationResult} = require('express-validator')




  const getAdmin = asyncHandler(async (req, res, next) =>{
    const admines = await Admine.find({});
    res.json(admines)
  });


  const creatAdmin = asyncHandler(async(req, res) => {
    const salt = await bcrypt.genSalt(10)

    if(!req.body.name || !req.body.phone || !req.body.email || !req.body.password){
      res.status(400).json({message: 'this text is required'})
    };

    const admin = await Admine.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    });
    admin.password = await bcrypt.hash(admin.password, salt);
    admin.save()
    // await admin.save();
    res.status(200).json({admin, token: authToken(admin._id)})
  });

  const login = asyncHandler(async(req, res) =>{
    const {email, password} = req.body;
    const admin = await Admine.findOne({ email });
    if(!admin){
      res.status(400).json('email dont exist please get register')
    }
    if(email && (await bcrypt.compare(password, admin.password))){
      res.json({admin, token: authToken(admin._id)})
    }

  });

  const authToken = (id) =>{

        const accessToken = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '1m'
          });
          const refreshToken = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
            });
              return({accessToken, refreshToken})
  }
  
module.exports = { getAdmin, creatAdmin, login }