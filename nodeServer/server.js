const express = require('express');

var server  = express();

server.use('/a.htm',function(req,res){
	// res.send('nihao');
	res.write({name:'nihao',age:22});
	res.end();
});
server.use('/b.htm',function(req,res){
	res.send({name:'nihao2',age:22});
	res.end();
});
server.listen(8088);