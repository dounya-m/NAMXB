const asyncHandler = require('express-async-handler')
const Admin = require("../models/adminModel");




  const getAdmin = asyncHandler(async (req, res) =>{
    const admines = "gaiuhui"
    res.json(admines)
  });
  const creatAdmin = asyncHandler(async(req, res) => {
    const {name, phone, email, password} = req.body;
    if(!name || !phone || !email || !password){
      res.status(400).json({message: 'text is required'})
    };
    const admin = await Admin.create({
      name,
      phone,
      email,
      password
    });
    await admin.save();
    res.json(admin)
  })
  
module.exports = { getAdmin, creatAdmin }