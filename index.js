const http = require('http');
const express = require('express');



const app = express();


const server = http.createServer(app);

app.get('/H',(req,res,next)=>{
    res.send("HOHO")
})

app.get('/L',(req,res,next)=>{
    res.send("LOLO")
})

server.listen(3001,()=>{
    console.log("Server running...");
});