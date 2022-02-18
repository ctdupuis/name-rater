const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const ObjectId = Schema.ObjectId;

const NameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pokemon: {
        type: String,
        required: true
    },
    userID: {
        type: ObjectId,
        required: true
    }
})

const Name = mongoose.model("Name", NameSchema);

module.exports = Name;