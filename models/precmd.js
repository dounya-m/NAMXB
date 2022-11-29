const mongoose = require("mongoose");

const precmdSchema = new mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    num_carte_bancaire: {
      type: String,
      required: true,
    },
    quantité: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // transactionId: {
    //   type: String,
    //   default:" 1234"
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("precmd", precmdSchema);
