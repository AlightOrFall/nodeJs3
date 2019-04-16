const koa = require('koa');
const app = new koa();

const asyncIo = function(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve();
		},500);
	});
}

const mid = function(){
	return function *(next){
		this.body = 'mark';
		yield next
		this.body += ' done';
	}
}

app.use(mid());
app.use(function *(next){
	yield asyncIo();
	this.body += ' saved';
	yield next
});

app.listen(3000);