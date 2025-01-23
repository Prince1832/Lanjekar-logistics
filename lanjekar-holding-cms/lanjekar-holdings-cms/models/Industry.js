const mongoose = require("mongoose");

// Model Schema
const industrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false, default: "" },
    description: {
      type: String,
      required: false,
      default: "None",
      useTextarea: true,
    },
    image: { type: String, required: false, default: "None", useImage: true },
    imageAlt: { type: String, required: true, unique: false, default: "" },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    slug: { type: String, required: true, default: "" },
  },
  { timestamps: {} }
);

const Industry = mongoose.model("Industry", industrySchema);

module.exports = Industry;
