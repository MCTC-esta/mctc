const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    username: { type: String },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    space: { type: String, required: true },
    status: { type: String },
    picture: {type: String},
    nationality : {type: String},
    contact: {type: String},
    profile: {type: String}
});

module.exports = User = mongoose.model("user", userSchema);