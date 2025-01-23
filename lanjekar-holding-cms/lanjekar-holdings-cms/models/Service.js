const mongoose = require("mongoose");

// Model Schema
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "My Love" },
    description: { type: String, required: false, default: "None" },
    image: { type: String, required: false, default: "None", useImage: true },
    logo: { type: String, required: false, default: "None", useImage: true },
    imageAlt: { type: String, required: true, default: "My Love" },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    slug: { type: String, required: true, default: "My Love" },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
