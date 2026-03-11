const express= require('express');
const app = express();

const userModel = require('./usermodule');

app.get('/',(req,res)=>{
   res.send('hello world');
});
app.get('/create',async (req,res)=>{
   let createdUser =await userModel.create({
    name:'harsh',
    email:'hmschinmayi-6@gmail.com',
    userName:'harsh'
   })
   res.send(createdUser);
});

app.get('/update',async (req,res)=>{
    let updatedUser=await userModel.findOneAndUpdate({name:'harsh'},{name:'john'}, {new: true},)
    res.send(updatedUser);
})

app.get('/read',async (req,res)=>{
    let users =await userModel.find();//TO READ ALL
    let user =await userModel.findOne({name:'harsh'}); //find-will give u an array findone -will give u an object
    res.send(users);
    res.send(user);
})

app.get('/delete',async (req,res)=>{
    let deleteUser =await userModel.findOneAndDelete({name:harsh});
    res.send(deleteUser);
})
app.listen(3000);