/*
IN node js we can use farmwork for routing or without framworke 
There are some different framwork express js was the popular one
*/
//With express framwork  routing using app method

var express = require('express')
 var app= express()

 app.get('/', function(req, res){
     res.send("hellow get routing")
 })

//for post
app.post('/', function(req, res){
    res.send('hey im post method')
})

//for heandling all the http request we use app.all()

app.all('/', function(req, res){
    console.log('hello im all routes')
    next(); // this will send in next handler
})


//using express with using the router 
//rather than definging route every time we can defined at once and using it every where

const express = require('express');
const Router = express.Router();
Router.route('/')
.all((req, res, next)=>{
    
})


//without any framework routing

var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var url= req.url;
    if(url === "/about"){
        console.log("welcome about page")
        res.end()
    }else if(url === "/contact"){
        console.log("welcome contact page");
        res.end()
    }else{
        console.log("welcome defualt page!!")
        res.end()
    }

    res.end();
}).listen(3000, function(){
    console.log('server started in port 3000')
})

