const express = require("express");
const AdminController = require("../controllers/admin.controller");
const router = express.Router();

router.post("/login", AdminController.login);
router.post("/", AdminController.createAdmin);

// router.get("/", auth.checkToken, AdminController.getAllAdmins);
// router.get("/:id", auth.checkToken, AdminController.getOneAdminByAdminId);

export default { router };
