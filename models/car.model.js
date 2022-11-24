const mongoose = require("mongoose");
const carSchema = mongoose.Schema(
  {
    carName: {
      type: String,
      required: true
    },
    detailOfCar: {
      type: Schema.Types.ObjectId,
      ref: "carDetails",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("car", carSchema);

