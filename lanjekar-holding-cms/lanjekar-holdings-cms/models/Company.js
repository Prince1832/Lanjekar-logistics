const mongoose = require('mongoose');

// Model Schema
const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false, default: "My Love" },
    title: { type: String, required: false, unique: false, default: "My Love" },
    subtitle: { type: String, required: true, unique: false, default: "My Love" },
    heading: { type: String, required: true, unique: false, default: "My Love" },
    description: { type: String, required: false, default: "None", useTextarea: true },
    mission: { type: String, required: false, default: "None", useTextarea: true },
    vision: { type: String, required: false, default: "None", useTextarea: true },
    website: { type: String, required: false, default: "None", useTextarea: true },
    phone: { type: String, required: false, default: "None", useTextarea: true },
    email: { type: String, required: false, default: "None", useTextarea: true },
    logo: { type: String, required: false, default: "None", useImage: true },
    banner: { type: String, required: false, default: "None", useImage: true },
    revenue: { type: String, required: false, unique: false, default: "My Love" },
    profit: { type: String, required: true, unique: false, default: "My Love" },
    keyachievements: { type: String, required: true, unique: false, default: "My Love" },
    slug: { type: String, required: false, default: "None" },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessCategory',
    },
    
    metaTitle: { type: String, required: false, default: "None" },
    metaDescription: { type: String, required: false, default: "None", useTextarea: true },
    indexing: {
        type: String,
        enum: ["max-image-preview:large, max-snippet:-1, max-video-preview:-1", "noindex", "noindex, follow", "nofollow", "noindex, nofollow"],
        required: false,
        default: "max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    companySchema: { type: String, required: false, default: "None", useTextarea: true },
}, { timestamps: {} });


const Company = mongoose.model('Company', companySchema);

module.exports = Company