const express = require('express');
const app=express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const path = require('path');
const cookieParser = require('cookie-parser');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());

app.get("/",function(req,res){
    res.render("index");
})
app.post("/create",async (req,res)=>{
    let {username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async(err, hash)=>{
            let createduser=await userModel.create({
                username,
                email,
                password:hash,
                age
        })
        let token = jwt.sign({email}, "ssssssssssss");
        res.cookie("token",token);
        res.send(createduser);
        })
    })
})

app.post("/login",function(req,res){
    res.render("login");
})

app.get('/logout',function(req,res){
    res.cookie("token","");
    res.redirect("/");
})

app.listen(3000);