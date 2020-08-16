const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

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

    user.secure_password = undefined;

    res.json(user);
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(400).json({
        error: "USER Email doesn't exist",
      });
    }
    const { _id, name, email, secure_password } = user;

    const authenticate = (password) => {
      return bcrypt.compareSync(password, secure_password);
    };

    if (!authenticate(password)) {
      res.status(401).json({
        error: "Email and Password do not match",
      });
    }

    const secret = process.env.SECRET ? process.env.SECRET : "top-level-secret";
    const token = jwt.sign({ _id: user._id }, secret);
    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 10 });
    // send response to frontend

    return res.json({ token, user: { _id, name, email } });
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "Signout",
  });
};
