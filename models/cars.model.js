const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema(
  {
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





module.exports = mongoose.model("cars", carsSchema);
