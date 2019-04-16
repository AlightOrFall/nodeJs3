const http = require('http');
const querystring = require('querystring');
http.createServer(function(req, res) {
	var str = "";
	var i = 0;
	 req.on('data',function(data){
		 console.log("第"+(i++)+"次接受数据");
		 str +=data;
		 i++;
	 });
	 req.on('end',function(){
		 var post = querystring.parse(str);
		 console.log(post);
	 });
}).listen(8088); 