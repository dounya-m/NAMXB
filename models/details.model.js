const mongoose = require("mongoose");
const DetailSchema = new mongoose.Schema({
    carName: {
      type: String,
      required: true
    },
    detailOfCar: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("details", DetailSchema);
