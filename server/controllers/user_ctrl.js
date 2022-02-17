require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    register: (req, res) => {

    }
};