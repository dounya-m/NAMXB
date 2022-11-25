const express = require("express");
const admin = require("../controllers/adminController");
const router = express.Router();

const {protect} = require('../middleware/authAdminMiddlware')

router.get("/", admin.getAdmin);
router.post("/", admin.creatAdmin)
router.post("/login", admin.login)
router.get('/check', protect, admin.checkAuth)


// router.get("/", auth.checkToken, AdminController.getAllAdmins);
// router.get("/:id", auth.checkToken, AdminController.getOneAdminByAdminId);

module.exports = router;
