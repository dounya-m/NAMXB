const express = require("express");
const typesController = require("../controllers/typesController");
const router = express.Router();

router.post("/", typesController.createType);
router.get("/", typesController.getAllType);
router.get("/:id", typesController.getOneTypeById);
router.put("/:id", typesController.updateOneType);
router.delete("/:id", typesController.deleteType);

module.exports = { router };
