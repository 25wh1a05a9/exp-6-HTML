const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");
//os
console.log("Platform", os.platform());
console.log("Free Memory", os.freemem());

//path
console.log("File Name", path.basename(__filename));

//event
const event = new EventEmitter();
event.on("Welcome",()=> console.log("Welcome Event Triggered"));

//http
const server = http.createServer((req,res)=>{
    event.emit("Welcome");
    res.end("hello, Welcome to Nodejs server");

});

server.listen(3000, ()=>
{
    console.log("server is running at http://localhost:3000", os.platform());
})