const express = require("express");
const carsController = require("../controllers/cars.controller");
const router = express.Router();


router.post("/", carsController.createCar);


// router.get("/", detailController.getAllAdmins);
// router.get("/:id", detailController.getOneAdminByAdminId);

module.exports = {router} ;