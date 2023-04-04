const UaePassStrategy = require('passport-uaepass').Strategy;
const { web } = require('./credentials.json');

const strategy = new UaePassStrategy({
    clientID: 'UAEPASS_CLIENT_ID',
    clientSecret: 'UAEPASS_CLIENT_SECRET',
    callbackURL: 'UAEPASS_CALLBACK_URL',
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
});


// only web credentials are inserted need to export for both android and ios
module.exports = strategy;