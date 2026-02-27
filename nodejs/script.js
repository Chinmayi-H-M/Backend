const fs =require('fs');

fs.writeFile("hey.text","Hello this is from growthDiary",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("File created successfully");
    }
})

fs.appendFile("hey.text","It covers all the info about tech, health",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("The info updated successfully");
    }
})