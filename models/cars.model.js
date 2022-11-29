const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true
    },
<<<<<<< HEAD
    image: {
      type: Array,
=======
    description: {
      type: String,
>>>>>>> e14089a0ecc1f739a0474f6156f5cd3cba679142
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
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", carsSchema);
