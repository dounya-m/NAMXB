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
      ref: "clients",
      require: true,
    },
    quantité: {
      type: Array,
      require: true,
    },
    transactionId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("precmd", precmdSchema);
