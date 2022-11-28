const mongoose = require("mongoose");
const detailSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("detail", detailSchema);
