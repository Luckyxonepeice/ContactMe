const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema =  new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    
    email : {
        type:String,
        required:true
    },

    phone : {
        type:Number,
        required:true
    },

    work : {
        type:String,
        required:true
    },

    password : {

        type:String,
        required:true
    },
    tokens:[
        {
            token_val:{
                type:String,
                required:true
            }
        }
    ]

})



userSchema.pre('save',async function(next){

    if(this.isModified('password')){

        this.password=await bcrypt.hash(this.password,12);
    }

    next();

});

userSchema.methods.generateAuthToken = async function(){

    try{
        const secret = "ACOLIz61PEH3NpdZYxuQVrkWR26OFQAs";
        let token = jwt.sign({_id:this._id},secret);
        this.tokens = this.tokens.concat({token_val:token});
        await this.save();
        return token;

    }catch(err){
    }
}
const User = mongoose.model('USER',userSchema);

module.exports = User;
