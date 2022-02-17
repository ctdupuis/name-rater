const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;