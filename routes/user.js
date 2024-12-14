const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");


router
    .route("/signup")
    //signup page
    .get(userController.signupPage)
    //signup
    .post(saveRedirectUrl, wrapAsync(userController.signup))


router
    .route("/login")
    //login page
    .get(userController.loginPage)
    //login 
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login)


//logout

router.get("/logout", userController.logout);

module.exports = router;