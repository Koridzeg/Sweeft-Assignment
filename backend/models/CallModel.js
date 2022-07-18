const mongoose = require("mongoose");

const CallSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "User",
    },
    number: {
      type: Number,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Call", CallSchema);
