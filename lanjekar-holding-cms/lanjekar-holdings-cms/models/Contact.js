const mongoose = require("mongoose");

// User Schema
const contactSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: false },
    email: { type: String, required: true, useEmail: true },
    phone: { type: String, required: true, usePhone: true },
    requirements: { type: String, required: false },
    subject: { type: String, required: false },
    companyName: { type: String, require: false },
    message: { type: String, required: false },
    url: { type: String, required: false },
    file: {
      filename: { type: String, required: false },
      path: { type: String, required: false },
      mimetype: { type: String, required: false },
      size: { type: Number, required: false },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
