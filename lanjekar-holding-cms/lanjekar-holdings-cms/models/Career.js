const mongoose = require('mongoose');

// Model Schema
const careerSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    position: { type: String, required: true, default: "N/A" },
    type: { type: String, required: false, default: "None" },
    location: { type: String, required: false, default: "Mumbai" },
    shift: { type: String, required: false, default: "N/A" },
    experience: { type: String, required: false, default: "N/A" },
    salary: { type: String, required: false, default: "N/A" },
    description: { type: String, required: false, default: "None", useTextarea: true },
    content: { type: String, required: false, default: "None", useEditor: true },
    slug: { type: String, required: false, default: "None" },
    metaTitle: { type: String, required: false, default: "None" },
    metaDescription: { type: String, required: false, default: "None", useTextarea: true },
    careerSchema: { type: String, required: false, useTextarea: true },
    canonicalUrl: { type: String, required: false },
}, { timestamps: {} });

const Career = mongoose.model('Career', careerSchema);

module.exports = Career
