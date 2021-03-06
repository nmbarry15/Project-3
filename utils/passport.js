require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const db = require("../models");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.CHAT_JWT_SECRET
    },
    function(jwt_payload, done, type) {
      switch (type) {
        case "customer": {
          db.Customer.findOne({ where: { id: jwt_payload.id } })
            .then(user => {
              if (!user) return done(null, false);

              return done(null, user);
            })
            .catch(err => done(err, false));
        }

        case "employee": {
          db.Employee.findOne({ where: { id: jwt_payload.id } }) 
            .then(user => {
              if (!user) return done(null, false);

              return done(null, user);
            })
            .catch(err => done(err, false));
        }
      }
    }
  )
);

module.exports = passport;
