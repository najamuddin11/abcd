const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../../validation/register");

const validateLoginInput = require("../../../validation/login");

//Load User Model

const Organizer = require("../../../model/Organizer");

// @route GET api/users/test
// @desc Tests post route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Organizer Works" }));

// @route GET api/users/register
// @desc Register User
// @access Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Organizer.findOne({ email: req.body.email }).then((organizer) => {
    if (organizer) {
      return res.status(400).json({ email: "Email Already Exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      const newOrganizer = new Organizer({
        isOrganizer: req.body.isOrganizer,
        isUser: req.body.isUser,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        avatar: avatar,
        address1: req.body.address1,
        address2: req.body.address2,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        zipCode: req.body.zipCode,
        nameOnCard: req.body.nameOnCard,
        cardNum: req.body.cardNum,
        expireDate: req.body.expireDate,
        cvv: req.body.cvv,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newOrganizer.password, salt, (err, hash) => {
          if (err) throw err;
          newOrganizer.password = hash;
          newOrganizer
            .save()
            .then((organizer) => res.json(organizer))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route GET api/users/login
// @desc Login User / Returning JWT Token
// @access Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  Organizer.findOne({ email }).then((organizer) => {
    if (!organizer) {
      errors.email = "User Not Found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, organizer.password).then((isMatch) => {
      if (isMatch) {
        //User Matched
        const payload = {
          isOrganizer: organizer.isOrganizer,
          isUser: organizer.isUser,
          id: organizer.id,
          firstName: organizer.firstName,
          lastName: organizer.lastName,
          avatar: organizer.avatar,
          username: organizer.username,
          email: organizer.email,
        };
        //SignIn Token
        jwt.sign(
          payload,
          keys.secretOrKey,

          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route GET api/users/current
// @desc Return Current User
// @access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.firstName + " " + req.user.lastName,
      email: req.user.email,
    });
  }
);

module.exports = router;
