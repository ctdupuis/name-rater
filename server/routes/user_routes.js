const express = require('express');
const router = express.Router();

const {
    auth,
    register
} = require("../controllers/user_ctrl");

router.get("/auth", auth);
router.post("/register", register)

module.exports = router;