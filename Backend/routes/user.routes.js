const express = require('express')
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');


router.post('/register',[
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('fullname.firstname'),islength({min:2}).withMessage('First name must be at least 2 characters'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters')
],
userController.registerUser);

module.exports = router;