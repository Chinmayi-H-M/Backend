const http = require('http');

const server =http.createServer(function(re,res){
    res.end("Hello this is from growthDiary");
})
server.listen(3000);