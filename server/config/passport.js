// backend/config/passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../models/User.model');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) return done(null, existingUser);

        const newUser = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          profilePic: profile.photos && profile.photos[0] ? profile.photos[0].value : '',
        });

        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});
