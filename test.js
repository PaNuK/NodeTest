var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{ 'Context-Type' : 'text/plain'});
    res.write("test");
    res.end();
}).listen(3000);

console.log('Server running on port 3000');