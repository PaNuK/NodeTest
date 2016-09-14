//var http = require('http');
//
//http.createServer(function(req, res){
//    res.writeHead(200,{
//       'Content-type' : 'text/plain'
//    });
//    res.end('Hello');
//}).listen(3000);
//
//console.log('Server running at http://127.0.0.1:3000/');



var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('hello');
});

var server = app.listen(3000, function(){
   console.log('server running');
});