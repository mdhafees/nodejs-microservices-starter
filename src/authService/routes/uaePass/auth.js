import express from "express";
import { oauthUaePass } from "../../../config/auth/uaepass/uaepass_auth"

const router = express.Router();

router.get('/', (req, res) => {
    const authUrl = oauthUaePass.getAuthorizationUrl();
    res.redirect(authUrl);
});

router.get('/response', async (req, res) => {
    const { code } = req.query;

    try {
        // Exchange the authorization code for an access token and refresh token
        const { access_token, refresh_token } = await oauthUaePass.getTokens(code);

        // Retrieve the user's profile information
        const userInfo = await oauthUaePass.getUserInfo(access_token);

        // Store the access token and refresh token in a secure location for later use
        console.log('Access token:', access_token);
        console.log('Refresh token:', refresh_token);
        console.log('User info:', userInfo);

        res.send('Signed in with UAE PASS!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve access token');
    }
});

export default router;
