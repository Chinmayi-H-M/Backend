const express= require('express');
const app = express();

const userModel = require('./usermodule');

app.get('/',(req,res)=>{
   res.send('hello world');
});
app.get('/create',(req,res)=>{
   userModel.create({
    name:'harsh',
    email:'hmschinmayi-6@gmail.com',
    username:'harsh'
   })
});
app.listen(3000);