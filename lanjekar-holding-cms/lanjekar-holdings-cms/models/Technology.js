const mongoose = require("mongoose");



const benefitSchema = new mongoose.Schema(
  {
    keypoint: { type: String, required: true, default: "technologies" },
    slugPage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology", // Reference to the User model
    },
  },

  { timestamps: true }
);

const Point = mongoose.model("BenfitsPoints", benefitSchema);
module.exports.Point = Point;

const technologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "technologies" },
    description: { type: String, required: false, default: "None" },
    image: { type: String, required: false, default: "None" },
    slug: { type: String, required: true, default: "technologies" },
  },
  { timestamps: true }
);

const Technology = mongoose.model("Technology", technologySchema);
module.exports = Technology;
