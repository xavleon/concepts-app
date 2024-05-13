const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.post("/submission", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newUser = new User({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    await newUser.save();

    res.status(201).send({
      message: "Message submitted successfully!",
      User: newUser,
    });
  } catch (err) {
    res.status(400).send({
      message: "Error: Message not submitted!",
      message: err.message,
    });
  }
});

module.exports = router;
