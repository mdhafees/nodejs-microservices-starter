import express from "express";
const passport = require('passport');
// import { passport } from "../../../../config/auth/local/local_auth"
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Please log in');
  });

  router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // res.json(token);
    let response = {
      statusCode : 0,
      statusMessage: 'Signed in with other email',
      data: {
        username: req.body.username,
        token: token
      }
  }
  res.json(response)
});


export default router;
