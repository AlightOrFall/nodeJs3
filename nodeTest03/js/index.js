async function index(){
	return 'hello world!';
}

index().then(result=>{
	console.log(result);
});

index();
console.log(index());

console.log("你好~！");