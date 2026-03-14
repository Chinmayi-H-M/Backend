const express = require('express');
const app=express();

app.get("/",function(req,res){
    res.cookie("name","john");
    res.send("cookie set");
})
app.get("/read",function(req,res){
    res.send("read page");
})

app.listen(3000);