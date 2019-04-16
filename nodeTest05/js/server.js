var express = require('express');
var app = express();

var asyncIo = function(cb){
	setTimeout(function(){
		cb();
	},500);
}

var mid = function(req,res,next){
	req.body = 'mark';
	next();
}

app.use(mid);
app.use(function(req,res,next){
	asyncIo(function(){
		req.body += ' save';
		res.send(req.body + ' done');
	});
});

app.listen(3000);