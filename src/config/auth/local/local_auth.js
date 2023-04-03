
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy((username, password, done) => {

  try {
    if (username === 'hafees' && password === '1234') {
      return done(null, { id: 1, username: 'user' });
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }

    // const user = await User.findOne({ email });
    // if (!user) {
    //   return done(null, false, { message: 'Incorrect email or password.' });
    // }
    // const isValid = await user.isValidPassword(password);
    // if (!isValid) {
    //   return done(null, false, { message: 'Incorrect email or password.' });
    // }
    // return done(null, user);
  } catch (err) {
    return done(err);
  }
});

// only web credentials are inserted need to export for both android and ios
module.exports = strategy;