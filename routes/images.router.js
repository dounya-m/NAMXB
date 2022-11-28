const express = require("express");
const controller = require("../controllers/imagesController");
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../userFiles/projectImage");
  },
  filename: function (req, file, cb) {
    cb(null, "UploadedOn" + Date.now() + "fileOrigName" + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), controller.saveProject);
//router.get('/edit', controller.create);
//router.post('/create', controller.save);
//router.get('/delete', controller.delete);
module.exports = {router};
