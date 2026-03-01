const express= require('express');
const app = express();

app.use(function(req,res,next){
    console.log("This is my first middleware");
    next();
})

app.get("/", function(req,res){
    res.send("Hello this is chinmayi");
})
app.get("/about", function(req,res){
    res.send("This is my about page");
})

app.get("/profile", function(req,res,next){
    return next(new Error("Not implemented"));
})

app.use((err, req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
})
app.listen(3000);