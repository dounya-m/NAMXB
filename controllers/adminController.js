const asyncHandler = require('express-async-handler')
const Admine = require("../models/adminModel");




  const getAdmin = asyncHandler(async (req, res, next) =>{
    const admines = await Admine.find({});
    res.json(admines)
  });
  const creatAdmin = asyncHandler(async(req, res) => {

    if(!req.body.name || !req.body.phone || !req.body.email || !req.body.password){
      res.status(400).json({message: 'this text is required'})
    };
    const admin = await Admine.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    });
    // await admin.save();
    res.status(200).json(admin)
  })
  
module.exports = { getAdmin, creatAdmin }