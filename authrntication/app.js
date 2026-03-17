const express = require('express');
const app=express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

const saltRounds = 10; // ✅ FIX
app.use(cookieParser());
app.get("/",function(req,res){
    // res.cookie("name","john");
    // res.send("cookie set");
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash("Chin/20/13", salt, function(err, hash) {
        console.log(hash);
    });
});
})
app.get("/read",function(req,res){
    console.log(req.cookies);
    res.send("read page");
})
app.get("/jwt",function(req,res){
    let token= jwt.sign({email:"hmschinmayi@gamilc.com"},"secret");
    res.cookie("token",token);
    res.send("JWT page");
})
app.get("/readjwt",function(req,res){
    let data = jwt.verify(req.cookies.token,'secret');
    console.log(data);
})

app.listen(3000);