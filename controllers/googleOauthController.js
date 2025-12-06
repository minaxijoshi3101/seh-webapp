const passport = require('passport')
const  GoogleStrategy = require('passport-google-oauth20').Strategy; 
const model = require('../models');
const { generateUUID } = require('react-router-dom');

passport.use(GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallBack: true
},
    async(req,accessToken,refreshToken,profile,done)=>{
        const id = generateUUID
    }
))