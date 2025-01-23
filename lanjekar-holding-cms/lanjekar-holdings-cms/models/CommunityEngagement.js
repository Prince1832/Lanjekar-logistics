const mongoose = require('mongoose');

// Model Schema
const communitySchema = new mongoose.Schema({
    image: { type: String, required: false, default: "Miss ME", useImage: true },
    altTag: { type: String, required: false, default: "None" },
    name: { type: String, required: false, default: "None" },
}, { timestamps: {} });

const CommunityEngagement = mongoose.model('CommunityEngagement', communitySchema);

module.exports = CommunityEngagement