
const express= require('express');
const router = express.Router();
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
    })

    await user.save();

    return res.send({
        message:"Successfully Registered"
    });

})

router.post('/login', credentials, async (req,res)=>{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.send({
            message:"Invalide Credentials!!"
        })
    }

    if(user.password.localeCompare(password)===0){
        return res.send({
            message:"Invalide Credentials!!"
        })
    }

    res.send({
        message:"Successfully Login!!"
    })

})

module.exports= router;