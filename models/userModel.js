const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"], // Fixed "require" to "required"
      enum: ["admin", "organization", "user", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        return this.role === "user" || this.role === "admin"; // Simplified
      },
    },
    organizationName: {
      type: String,
      required: function () {
        return this.role === "organization"; // Simplified
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        return this.role === "hospital"; // Simplified
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Fixed "require" to "required"
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"], // Fixed "require" to "required"
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"], // Fixed "require" to "required"
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"], // Fixed "require" to "required"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
