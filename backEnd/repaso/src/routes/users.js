const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    user.password = await User.encryptPassword(user.password);
    const newUser = await User.create(user);
    await newUser.save();
    res.status(201).send({ message: "User created", data: newUser });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
