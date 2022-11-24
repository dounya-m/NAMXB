const express = require("express");
const admin = require("../controllers/adminController");
const router = express.Router();

router.get("/", admin.getAdmin);
router.post("/", admin.creatAdmin)


// router.get("/", auth.checkToken, AdminController.getAllAdmins);
// router.get("/:id", auth.checkToken, AdminController.getOneAdminByAdminId);

module.exports = router;
