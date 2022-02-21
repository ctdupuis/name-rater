const express = require('express');
const router = express.Router();

const {
    auth,
    signup,
    login,
    logout,
    resetPassword
} = require("../controllers/user_ctrl");

router.get("/auth", auth);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/reset/:email", resetPassword);

module.exports = router;