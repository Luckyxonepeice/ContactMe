const express = require('express');
const {check} = require('../backend/middleware/Auth')
require('./utils/mongoConnect');

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is Active");
});

app.get('/about', check, (req,res)=>{
    res.send("About Me Page!");
})

app.get('/contact', (req,res)=>{
    res.send("Contace Me Page!")
})

app.get('/signin', (req,res)=>{
    res.send("Sign-in yourself!")
})
app.get('/signup', (req,res)=>{
    res.send("Sign-up yourself!!")
})

app.listen(5000,()=>{
    console.log("server is Running!");
})