const express = require('express');
const {check} = require('../backend/middleware/Auth')
require('./db/mongoConnect');

const app = express();

app.use(express.json());

app.use("/api",require('./router/auth'));

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