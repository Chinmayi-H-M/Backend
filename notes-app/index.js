const express = require('express');
const path = require('path');
const app = express();
//setting up parsers 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
//set up ejs
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
})

app.get('/profile/:username',function(req,res){
    res.send(`Any names by dynamic routing ${req.params.username}`);
})
app.get('/author/:username/:age',function(req,res){
    res.send(`Any names by dynamic routing ${req.params.username} and age is ${req.params.age}`);
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})

//dynamic routing 
//1.sabse pehla browser par jaana 
//2.url likhiye apna jo aapka chahiye and dabaiye
//3.ab us url route ko create kariye
//4.res bhejiye kuchh bhi
//5.

