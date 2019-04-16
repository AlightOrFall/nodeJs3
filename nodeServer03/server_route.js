const express = require('express');

var server = express();

var routeUser = express.Router();

routeUser.get('/1.html',function(req,res){
	res.send('1.html');
});
routeUser.get('/2.html',function(req,res){
	res.send('2.html');
});
server.use('/user',routeUser);

var routeA = express.Router(); 
routeA.get('/1.htm',function(req,res){
	res.send('1.htm');
});
routeA.get('/2.htm',function(req,res){
	res.send('2.htm');
});
server.use('/user',routeA);

server.listen(8088);