import oauth2Client from "../../../config/auth/google/google_auth"
import { google } from "googleapis"

import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['profile', 'email']
    });

    res.redirect(authUrl);
});

router.get('/response', async (req, res) => {
    const { code } = req.query;

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        // Retrieve all the scopes of the signed-in user
        const auth = google.oauth2({
            version: 'v2',
            auth: oauth2Client,
        });
        const { data } = await auth.userinfo.get();
        const scopes = data.email_verified ? data.scope.split(' ') : [];

        // console.log('Access token:', tokens.access_token);
        // console.log('Refresh token:', tokens.refresh_token);
        // console.log('User scopes:', scopes, data );
        res.send('Signed in with Google! user data ' + JSON.stringify(data));
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to retrieve access token');
    }
});

export default router;
