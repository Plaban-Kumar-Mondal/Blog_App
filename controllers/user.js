const User = require("../models/User");

// method for params
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB!",
      });
    }
    req.profile = user;
    next();
  });
};

// show user
exports.getUser = (req, res) => {
  req.profile.secure_password = undefined;
  return res.json(req.profile);
};
