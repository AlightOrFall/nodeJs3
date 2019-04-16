const express = require('express');

const bodyParser	= require('body-parser');


var server  = express();
server.listen(8088);
server.use('/',function(req,res,next){
	console.log('a');
	
	next();
})

server.use('/',function(req,res,next){
	console.log('b');
	
})


// server.use(expressStatic('./html'));
