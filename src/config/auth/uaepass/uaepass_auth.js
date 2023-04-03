const passport = require('passport');
const UaePassStrategy = require('passport-uaepass').Strategy;
const { web } = require('./credentials.json');

passport.use(new UaePassStrategy({
    clientID: 'UAEPASS_CLIENT_ID',
    clientSecret: 'UAEPASS_CLIENT_SECRET',
    callbackURL: 'UAEPASS_CALLBACK_URL',
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    // Here you can customize the user object and store it in the session or database.
    // The `profile` object contains the user's profile information.
    // The `accessToken` and `refreshToken` are used to authenticate API requests.
    return done(null, profile);
}));


// only web credentials are inserted need to export for both android and ios
export default { passport };