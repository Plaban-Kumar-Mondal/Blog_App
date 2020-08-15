const User = require("../models/User");

exports.signup = (req, res) => {
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

exports.signout = (req, res) => {
  res.json({
    message: "Signout",
  });
};
