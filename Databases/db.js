const express = require('express');
const mongoose = require('mongoose');
const path =require('path');
const userModel = require('./models/user');


const app = express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/read',async (req,res)=>{
    let allUsers =await userModel.find();
    res.render('read',{users:allUsers});
})
app.post('/create', async (req,res)=>{
    let {name,email,image} = req.body;
    let createdUser = await userModel.create({
        name:name,
        email:email,
        image:image
    });
    res.redirect('/read');
})
app.get('/edit/:id',async (req,res)=>{
    let users = await userModel.findOne({_id:req.params.id});
    res.render('edit');
})
app.get('/delete/:id', async (req,res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('read');
})
app.get('/deleteall', async (req, res) => {
    await userModel.deleteMany({});
    res.send("All users deleted");
});
app.listen(3000);