const express = require("express");
const controller = require("../controllers/imagesController");
const router = express.Router();

router.post("/",  controller.saveProject);
//router.get('/edit', controller.create);
//router.post('/create', controller.save);
//router.get('/delete', controller.delete);
module.exports = {router};
