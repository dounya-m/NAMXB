const express = require("express");
const controller = require("../controllers/imagesController");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

router.post("/", upload.single("image"), controller.saveProject);
//router.get('/edit', controller.create);
//router.post('/create', controller.save);
//router.get('/delete', controller.delete);
module.exports = { router };
