const mongoose = require("mongoose");
const imagesSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      require: true
    },
    filepath: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("images", imagesSchema);
