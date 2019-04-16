const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

var server = express();

var objectMuiter = multer({dest:'./www/upload/'});
server.use(objectMuiter.any());

server.post('/',function(req,res){
	console.log(req.files);
});
server.listen(8088);