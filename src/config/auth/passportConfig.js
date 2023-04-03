const passport = require('passport');
const LocalStrategy = require('./local/local_auth');
// const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user);
});

// deserialize user function
passport.deserializeUser(async (user, done) => {
    try {
        // const user = await User.findById(id);
        const user = { id: user.id, username: user.username }
        done(null, user);
    } catch (err) {
        done(err);
    }
});

passport.use(LocalStrategy);

module.exports = passport;