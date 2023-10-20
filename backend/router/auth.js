
const express= require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../modals/userSchema");
const { check,credentials } = require('../middleware/Auth');

router.get('/',(req,res)=>{
    res.send("Server is Active");
});

router.post('/register', check, async (req,res) => {

    const {name,email,phone,work,password} = req.body;
    
    const user_find = await User.findOne({email});

    if(user_find) {
        return res.send({
            message:"User Already Exists!!"
        })
    }

    const user = new User({
        name,email,phone,work,password
    });

    

    await user.save();

    return res.send({
        message:"Successfully Registered"
    });

})

router.post('/login', credentials, async (req,res)=>{

    let token;
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        console.log("Email");
        return res.send({
            message:"Invalide Credentials!!"
        })
    }

    const match = await bcrypt.compare(password,user.password);


    if(!match){
        console.log("Password");
        return res.send({
            message:"Invalide Credentials!!"
        })
    }

    //For Generating Token
    token = await user.generateAuthToken();
    
    res.cookie("token",token,{
        expires:new Date(Date.now()+2500000000),
        httpOnly:true
    });

    res.send({
        message:"Successfully Login!!"
    })

})

module.exports= router;