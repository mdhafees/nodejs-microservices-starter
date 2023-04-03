import { google } from "googleapis"
const { OAuth2 } = google.auth;

const { web } = require('./credentials.json');

const CLIENT_ID = web.client_id;
const CLIENT_SECRET = web.client_secret;
const REDIRECT_URL = web.redirect_uris;

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

// only web credentials are inserted need to export for both android and ios
export default oauth2Client