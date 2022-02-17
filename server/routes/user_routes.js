const express = require('express');
const router = express.Router();

const {
    register
} = require("../controllers/user_ctrl");

router.post("/register", register)

module.exports = router;