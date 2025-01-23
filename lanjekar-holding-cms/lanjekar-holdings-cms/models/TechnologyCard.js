const mongoose = require("mongoose");
const technologiescardSchema = new mongoose.Schema(
  {
    banner: { type: String, required: false, default: "None", useImage: true },
    heading: { type: String, required: true, default: "technologies" },
    description: { type: String, required: false, default: "None" },
    image: { type: String, required: false, default: "None", useImage: true },
    slugPage: {
      type: mongoose.Schema.Types.String,
      ref: "Technology", // Reference to the User model
    },
  },
  { timestamps: true }
);

const TechnologyCard = mongoose.model("TechnologyCard", technologiescardSchema);
module.exports = TechnologyCard;