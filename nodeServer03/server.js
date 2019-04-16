const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');

var server = express();
server.listen(8088);

//1.解析cookie
server.use(cookieParser('12qwqw4eqeqdqe12qdqasdqasd'));

//2.使用session
var arry = [];
for(var i = 0; i < 10000;i++){
	arry.push('keys_'+Math.random());
}
server.use(cookieSession({name:'zns_sess_id',keys:arry,maxAge:20*3600*100}));


//3.post数据
server.use(bodyParser.urlencoded({extended:false}));

//4.配置引擎
server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);

//用户请求
server.get('/index.htm',function(req,res){
	res.render('2.ejs',{name:'blue'});
})

//4.static数据
server.use(expressStatic('./www'));