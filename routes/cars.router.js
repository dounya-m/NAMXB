const express = require("express");
const carsController = require("../controllers/cars.controller");
const router = express.Router();


router.post("/", carsController.createCar);

router.get("/",  carsController.getAllCars);
router.get("/:id", carsController.getOneCarById);
router.put("/:id",  carsController.updateOneCar);
router.delete("/:id", carsController.deleteCar);


module.exports = {router} ;