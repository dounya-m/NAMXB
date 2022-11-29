const express = require("express");
const detailsController = require("../controllers/detailControoler");
const router = express.Router();

router.post("/", detailsController.createDetail);
router.get("/", detailsController.getAllDetail);
router.get("/:id", detailsController.getOneDetailById);
router.put("/:id", detailsController.updateOneDetail);
router.delete("/:id", detailsController.deleteDetail);

module.exports = { router };
