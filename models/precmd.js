const mongoose = require("mongoose");

const precmdSchema = new mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    quantité: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    transactionId: {
      type: String,
      default:" 1234"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("precmd", precmdSchema);
