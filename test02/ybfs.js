var fs = require('fs');
fs.open('./hello.txt','w',function(err,fd){
	console.log("fisrt");
	if(!err){
		console.log(fd);
	}else{
		console.log(err);
	}
});
console.log("nihaoa");