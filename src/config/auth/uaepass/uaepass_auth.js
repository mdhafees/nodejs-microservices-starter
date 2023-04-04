// const UaePassStrategy = require('passport-uaepass').Strategy;
const OAuth2Strategy = require('passport-oauth2');
const { web } = require('./credentials.json');

// const strategy = new OAuth2Strategy({
//     clientID: 'sandbox_stage',
//     clientSecret: 'sandbox_stage',
//     callbackURL: 'http://localhost:6008/auth/uaepass/response',
//     authorizationURL: 'https://stg-id.uaepass.ae/idshub/authorize',
//     tokenURL: 'https://stg-id.uaepass.ae/idshub/token',
// }, (req, accessToken, refreshToken, profile, done) => {
//     return done(null, profile);
// });

const strategy = new OAuth2Strategy({
    // authorizationURL: 'https://stg-id.uaepass.ae/idshub/authorize',
    // tokenURL: 'https://stg-id.uaepass.ae/idshub/token',
    // clientID: 'sandbox_stage',
    // clientSecret: 'sandbox_stage',
    // callbackURL: 'http://localhost:6008/auth/uaepass/response',
    // responseType: 'code',
    // scope: 'urn:uae:digitalid:profile:general urn:uae:digitalid:profile:general:profileType urn:uae:digitalid:profile:general:unifiedId',
    // acr_values: 'urn:safelayer:tws:policies:authentication:level:low',

    authorizationURL: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as',
    tokenURL: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as/token',
    clientID: 'sandbox_stage',
    clientSecret: 'sandbox_stage',
    callbackURL: 'http://localhost:3000/auth/uaepass/callback',
    scope: 'urn:uae:digitalid:profile:general urn:uae:digitalid:profile:general:profileType urn:uae:digitalid:profile:general:unifiedId',
    state: true,
    acr_values: 'urn:safelayer:tws:policies:authentication:level:low',
    responseType: 'code',
    userProfileURL: 'https://qa-id.uaepass.ae/trustedx-resources/openid/v1/users/me',
    // state: 'pd3PgezRwk596u2yfRwqOgru',
    // redirect_uri: 'https://stg-selfcare.uaepass.ae'
},
    (accessToken, refreshToken, profile, done) => {
        const request = require('request');

        request.get({
            url: 'https://qa-id.uaepass.ae/trustedx-resources/openid/v1/users/me',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }, (err, response, body) => {
            if (err) {
                return done(err);
            }

            const profile = JSON.parse(body);

            // Save the profile data to your database
            // For example, you can use a MongoDB collection
            //   const users = db.collection('users');

            //   users.updateOne(
            //     { id: profile.id },
            //     { $set: profile },
            //     { upsert: true },
            //     (err, result) => {
            //       if (err) {
            //         return done(err);
            //       }

            //       // Call the `done` function to authenticate the user
            return done(null, profile);
            //     }
            //   );
        });
    }
);


// only web credentials are inserted need to export for both android and ios
module.exports = strategy;