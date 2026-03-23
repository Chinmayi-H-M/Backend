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
app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postdata:"Hello world",
        user:" "
    })
    let user = await userModel.findOne({_id: " "});
    user.posts.push(post._id);
    user.save();

res.json({post,user});
})

app.listen(3000);