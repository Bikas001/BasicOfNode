var http = require('http');
var dateT = require('./export.js');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Date time is: "+ dateT.myDateTime())
    var q= url.parse(req.url,true).query;
    var text = q.year + " "+ q.month;
    res.write(text)
    res.write(req.url)
    res.end();

}).listen(8080)


