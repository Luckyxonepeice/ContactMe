exports.check = (req,res,next)=>{
    
    const {name,email,phone,work,password} = req.body;
    
    if(!name || !email || !phone || !work || !password){
        
        return res.send({
            message:"Failure due to Empty credentials"
        })
    }
    if(!validateEmail(email)){
        return res.send({
            message:"Invalid email address!!"
        })
    }

    if(phone.toString().length!=10){
        return res.send({
            message:"Invalid Phone Number"
        })
    }
    next();
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

exports.credentials = (req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.send({
            message:"Missing Credentials!!"
        })
    }

    next();
}