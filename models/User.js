const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    secure_password: {
      type: String,
      required: true,
    },
    // salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password; // declared private variable to hold the original value
    this.secure_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.method = {
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return bcrypt.genSalt(10, function (err, salt) {
        // const salt = salt;
        bcrypt.hash(plainpassword, salt, function (err, hash) {
          return hash;
        });
      });
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
