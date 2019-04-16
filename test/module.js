var name;
exports.setName = function(thisName){
	name = thisName;
}
exports.sayHello = function(){
	console.log('Hello ' + name);
}