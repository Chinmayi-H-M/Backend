const express= require('express');
const app = express();

app.get("/", function(req,res){
    res.send("Hello this is chinmayi");
})
app.get("/profile", function(req,res){
    res.send("This is my profile");
})
app.listen(3000);