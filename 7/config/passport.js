const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/User");

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.data._id, (err, user) => {
        if(err){
          return done(err, false);
        }
  
        if(user){
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));
  }