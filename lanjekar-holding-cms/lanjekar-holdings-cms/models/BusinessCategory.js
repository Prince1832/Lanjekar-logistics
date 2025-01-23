const mongoose = require('mongoose');

// Model Schema
const bCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false, default: "" },
    title: { type: String, required: true, unique: false, default: "" },
    subtitle: { type: String, required: true, unique: false, default: "" },
    heading: { type: String, required: true, unique: false, default: "" },
    description: { type: String, required: true, unique: false, default: "" },
    slug: { type: String, required: false, default: "None" },
    image: { type: String, required: false, default: "", useImage: true },
    metaTitle: { type: String, required: false, default: "None" },
    metaDescription: { type: String, required: false, default: "None", useTextarea: true },
    indexing: {
        type: String,
        enum: ["max-image-preview:large, max-snippet:-1, max-video-preview:-1", "noindex", "noindex, follow", "nofollow", "noindex, nofollow"],
        required: false,
        default: "max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    businessCategorySchema: { type: String, required: false, default: "None", useTextarea: true },
    canonicalUrl: { type: String, required: false },
}, { timestamps: {} });

const BusinessCategory = mongoose.model('BusinessCategory', bCategorySchema);

module.exports = BusinessCategory