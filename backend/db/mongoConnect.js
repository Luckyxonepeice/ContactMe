const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/contact").
then(()=>{
    console.log("database connected!")
}).catch( (ex)=>{
    console.log("DB is Faulty!",ex);
})