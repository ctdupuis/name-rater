require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    auth: async(req, res) => {
        if (req.session.user) {
            res.status(200).send({ auth: req.session.user })
        } else {
            res.status(200).send({ auth: false })
        }
    },
    signup: async(req, res) => {
        const { userdata } = req.body;
        const securePass = bcrypt.hashSync(userdata.password, salt);
        userdata.password = securePass;
        const newUser = new User(userdata);
        try {
            const insertion = await User.create(newUser);
            const secureUser = {...insertion["_doc"]};
            delete secureUser.password;
            req.session.user = secureUser;
            res.status(200).send(secureUser);
        } catch (err) {
            res.status(400).send({ alert: { type: 'error', message: "Username or email is already taken "}});
        }
    },
    login: async(req, res) => {
        const { username, email, password } = req.body.userdata;
        const user = await User.findOne({ email: email });
        const authenticated = bcrypt.compareSync(password, user.password);
        if (authenticated) {
            let secureUser = {...user["_doc"]};
            delete secureUser.password;
            req.session.user = secureUser;
            res.status(200).send(secureUser);
        } else {
            res.status(400).send({ alert: {type: "error", message: "Invalid username or password"}})
        }
    },
    logout: async(req, res) => {
        req.session.destroy();
        res.status(200).send({ alert: { type: 'success', message: 'Successfully logged out'}})
    }
};