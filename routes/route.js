const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// retrive the data
router.get("/getContact", (req, res, next) => {
  Contact.find(function (err, contacts) {
    res.json(contacts);
  });
});

//add the data
router.post("/insertContact", (req, res, next) => {
  let newContact = new Contact({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
  });

  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "Failed to add contact" });
    } else {
      res.json({ msg: "Contact added successfully" });
    }
  });
});

//delete contacts
router.delete("/delContact/:id", (req, res, next) => {
  Contact.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
