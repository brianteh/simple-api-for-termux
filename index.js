const http = require('http');
const express = require('express');



const app = express();


const server = http.createServer(app);

app.use((req, res, next) => {
    res.setHeader('ngrok-skip-browser-warning', 'true');
    next();
});


app.get('/H',(req,res,next)=>{
    res.send("HOHO")
})

app.get('/L',(req,res,next)=>{
    res.send("LOLO")
})

app.post()

server.listen(3001,()=>{
    console.log("Server running...");
});