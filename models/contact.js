const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact = (module.exports = mongoose.model("Contact", ContactSchema));
