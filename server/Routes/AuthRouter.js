const express = require("express");
const app = express();
const AuthController = require("../Controller/AuthController");
const {check} = require('express-validator');
const authMiddleware = require('../middlewaree/authMidlewaree');
app.get("/",function(req,res){
    console.log("On server");
})
app.post("/registration",[
    check('username',"Username can't to be empty").notEmpty(),
    check('password',"Password can't to be so short").isLength({min:4,max:12}),
],AuthController.refistration);

app.post("/login",[
    check('username',"Username can't to be empty").notEmpty(),
    check('password',"Password can't to be so short").isLength({min:4,max:12}),
],AuthController.login);
app.get("/Users",authMiddleware,AuthController.getUsers);

module.exports = app