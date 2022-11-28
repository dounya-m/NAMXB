const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    treeDimensions: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      default: [],
      required: true
    },
    details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "types",
      require: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", carsSchema);
