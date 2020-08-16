const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);

  user.save((error, user) => {
    if (error) {
      // console.log("\n", error);
      return res.status(400).json({
        error: "Saving User in Database Failed!",
      });
    }
    res.json(user);
  });
};

exports.signin = (req, res) => {};

exports.signout = (req, res) => {
  res.json({
    message: "Signout",
  });
};
