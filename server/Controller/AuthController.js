const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("../config");
const { validationResult } = require("express-validator");

const generateAccessToken = (id , roles) =>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload,secret, {expiresIn:"6h"});
}

class AuthController{

    async refistration(req,res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Error validate data",errors});
            }
            const {username , password} = req.body;
            console.log(username+'\n'+password);
            const candidate = await User.findOne({username});
            if(candidate){
                return res.status(400).json({message:"Login is exsist"});
            }
            const hashPassword = await bcrypt.hashSync(password, 7);
            const UserRole = await Role.findOne({value:"User"});
            const user = new User({username:username,password:hashPassword,role:[UserRole.value]});
            await user.save();
            return res.json({message:"User is successful created!"});
        }   catch(e){
            console.log(e);
            return res.status(400).json({message:"Registration error"});
        }
    }
    async login(req,res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Error validate data",errors});
            }
            const {username , password} = req.body;
            const user = await User.findOne({username});
            if(!user){
                return res.status(400).json({message:`User ${username} didn't find!`});
            }
            const validPassword = await bcrypt.compareSync(password,user.password);
            if(!validPassword){
                return res.status(400).json({message:`Password didn't compare`});
            }
            const token = generateAccessToken(user._id,user.roles);
            req.headers.authorization = `Bearer ${token}`;
            return res.json(token);
        }   catch(e){
            console.log(e);
            return res.status(400).json({message:"Login error"});
        }
    }
    async getUsers(req,res){
        try{
            const users = await User.find();
            res.json(users);
        }   catch(e){
            console.log(e);
        }
    }
}

module.exports = new AuthController();