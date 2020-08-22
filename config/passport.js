const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Organzizer = mongoose.model('organizer');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      if(jwt_payload.isUser){
        User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
      }
      else if(jwt_payload.isOrganizer){
        Organzizer.findById(jwt_payload.id)
        .then(organizer => {
          if (organizer) {
            return done(null, organizer);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
      }
   

        
    })
  );
};
