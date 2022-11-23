const express = require("express");
const detailController = require("../controllers/details.controller");
const router = express.Router();


router.post("/", detailController.createDetails);


// router.get("/", detailController.getAllAdmins);
// router.get("/:id", detailController.getOneAdminByAdminId);

module.exports = {router} ;