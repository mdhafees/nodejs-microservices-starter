import express from "express";
// import { oauthUaePass } from "../../../../config/auth/uaepass/uaepass_auth"
// const passport = require('passport');
const passport = require('passport');
const querystring = require('querystring');
// import passport from "../../../../config/auth/passportConfig";

const router = express.Router();

const uaePassConfig = {
    clientId: 'sandbox_stage',
    clientSecret: 'sandbox_stage',
    authorizationEndpoint: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as',
    tokenEndpoint: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as/token',
    redirectUri: 'http://localhost:6008/auth/uaepass/response',
    scopes: ['openid', 'email'],
  };


router.get('/', passport.authenticate('oauth2'));
// router.get('/', (req, res) => {
//     const state = 'true'; // Generate a random state value for CSRF protection
//     const authorizationUrl = `${uaePassConfig.authorizationEndpoint}?${querystring.stringify({
//         response_type: 'code',
//         client_id: uaePassConfig.clientId,
//         redirect_uri: uaePassConfig.redirectUri,
//         scope: uaePassConfig.scopes.join(' '),
//         state,
//     })}`;
//     res.redirect(authorizationUrl);
// });

router.get('/response', async (req, res) => {
    const { code } = req.query;

    try {

        console.log('\n\n code', code)
        // Exchange the authorization code for an access token and refresh token
        // const { access_token, refresh_token } = await oauthUaePass.getTokens(code);

        // // Retrieve the user's profile information
        // const userInfo = await oauthUaePass.getUserInfo(access_token);

        // // Store the access token and refresh token in a secure location for later use
        // console.log('Access token:', access_token);
        // console.log('Refresh token:', refresh_token);
        // console.log('User info:', userInfo);

        res.send('Signed in with UAE PASS!', code);
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve access token');
    }
});

export default router;
