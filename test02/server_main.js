const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');
http.createServer(function(req, res) {
	var obj = urlLib.parse(req.url,true);
	var url = obj.pathname;
	const get = obj.query;
	
	var str = "";
	var i = 0;
	req.on('data',function(data){
		str +=data;
	});
	req.on('end',function(){
		var post = querystring.parse(str);
		console.log(url,get,post);
		 
		var file_name = './html/'+url;
		fs.readFile(file_name,function(err,data){
			err?console.log("404"):console.log(data);
			res.end();
		});
	});
}).listen(8088); 