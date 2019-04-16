function CreatePerson(name) { //普通方法
	this.name = name;
}
CreatePerson.prototype.showName = function() { //原型
	console.log(this.name);
}
var p1 = new CreatePerson('小明');
p1.showName();
var p2 = new CreatePerson('小强');
p2.showName();
console.log(p1.showName == p2.showName); //true
