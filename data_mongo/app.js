const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/data_mongo");
const userModel = require("./modules/user");
const postModel = require("./modules/posts");

app.get("/",function(req,res){
    res.send("Hello");
})

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username:"Chinmayi",
        age:19,
        email:"c@gmail.com",
        posts:[]
    })
    res.json(user);
})

app.listen(3000);