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
    blogs: [{ blog_id: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" } }],
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

userSchema.methods = {
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(plainpassword, salt);
    return hash;
  },
};

module.exports = mongoose.model("User", userSchema);
