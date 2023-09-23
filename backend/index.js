const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Server is Active");
});

app.get('/aboutme', (req,res)=>{
    res.send("About Me Page!");
})

app.listen(5000,()=>{
    console.log("server is Running!");
})