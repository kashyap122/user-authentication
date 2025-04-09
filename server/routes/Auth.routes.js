const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/',
      session: false,
    }),
    (req, res) => {
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
  
      // send token and user data to frontend (in query, cookie, or body)
      res.redirect(`http://localhost:5173/dashboard?token=${token}`);
    }
  );

// Sign up
router.post("/register", authController.register);

// Sign in
router.post("/login", authController.login);
 
module.exports = router;
