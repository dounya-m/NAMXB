const express = require("express");
const router = express();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  precmdCar,
  GetAllPrecmds,
  GetAllPrecmdsByUser,
  CancelPrecmd,
} = require("../controllers/precmdController");

router.post("/precmd-car/:userId", precmdCar);
router.get("/get-all-precmd", authMiddleware, GetAllPrecmds);
router.get("/:user_Id", GetAllPrecmdsByUser);
router.delete("/:precmd_id/:user_id/:car_id", CancelPrecmd);


module.exports = router;
