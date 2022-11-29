const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true
    },
    image: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      required: true,
      description: {
        type: String,
        required: true
      },
      details: {
        type: Object,
        required: true
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", carsSchema);
