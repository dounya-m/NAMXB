const mongoose = require("mongoose");
const typeSchema = new mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      require: true
    },
    details: {
      type: Array,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("types", typeSchema);
