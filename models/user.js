const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: "Enter a username"
        },
        email: {
            type: String,
            required: "Enter an email",
            unique: true
        },
        uid: {
            type: String,
            required: "Please supply a uid from Firebase"
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
