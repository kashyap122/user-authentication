const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const router = express.Router();

// Sign Up
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, confirmPassword } =
      req.body;

    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ message: "All feilds are required!" });
    }
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User Created Succesfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Sign in
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("route called");
    
    //Find user by email
    if (!email || !password){
      console.log("no email found");
      return res.status(400).json({ message: "User not found!" });
    }

    const user = await User.findOne({ email });
    console.log(user);
    
    if (!user) return res.status(400).json({ message: "User not found!" });

    //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    
    if (!isMatch)
      return res.status(400).json({ message: "Invaild credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
    console.log("Token :", token);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
