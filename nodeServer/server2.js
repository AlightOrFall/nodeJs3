const express = require('express');

const expressStatic	= require('express-static');


var server  = express();
server.get('/login.htm',function(req,res){
	var userName = req.query['name'];
	var password = req.query['password'];
	console.log('name:'+name+',password:'+password);
});
server.listen(8088);

server.use(expressStatic('./html'));
