
const express= require('express');
const router = express.Router();
const User = require("../modals/userSchema");
const { check } = require('../middleware/Auth');

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
module.exports= router;