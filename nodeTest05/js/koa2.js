const Koa = require('koa');
const app = new Koa();

const asnycIo = () =>{
	return new Promise(resolve => setTimeout(resolve,500));
}

const mid = () => async (ctx,next) =>{
	ctx.body = 'mark';
	await next();
	ctx.body = ctx.body + ' done';
}

app.use(mid());

app.use(async (ctx,next) => {
	await asnycIo();
	ctx.body += ' saved';
	await next();
})

app.listen(3000);