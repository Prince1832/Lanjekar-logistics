const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true, default: "" },
    answer: { type: String, required: true, default: "" },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', 
    },
}, { timestamps: true }); 

const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;
   