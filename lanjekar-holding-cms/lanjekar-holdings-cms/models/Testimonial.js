const mongoose = require('mongoose');

// Model Schema
const testimonialSchema = new mongoose.Schema({
    logo: { type: String, required: false, default: "None", useImage: true },
    companyName: { type: String, required: true, default: "None" },
    personName: { type: String, required: true, default: "None" },
    rating: { type: Number, required: true, default: 4.5 },
    reviewDate: { type: String, required: true, default: "5 days ago" },
    comment: { type: String, required: false, default: "None", useTextarea: true },
}, { timestamps: {} });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial