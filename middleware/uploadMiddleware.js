const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../userFiles/projectImage");
  },
  filename: function (req, file, cb) {
    cb(null, "UploadedOn" + Date.now() + "fileOrigName" + file.originalname);
  }
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4 * 1024 * 1024
  }
});
module.exports = upload;
