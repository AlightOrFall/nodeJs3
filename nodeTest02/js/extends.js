//声明父类
var SuperClass = function() {
	var id = 1; //私有的
	this.name = ['javascript'];//protected
	this.superValue = function() {
		console.log('superValue is true');
		console.log(id)
	}
};

//为父类添加共有方法
SuperClass.prototype.getSuperValue = function() {
	return this.superValue();
};

//声明子类
var SubClass = function() {
	this.subValue = function() {
		console.log('this is subValue ')
	}
};

//继承父类
SubClass.prototype = new SuperClass();

//为子类添加共有方法
SubClass.prototype.getSubValue = function() {
	return this.subValue()
};

var sub = new SubClass();
var sub2 = new SubClass();

sub.getSuperValue(); //superValue is true
sub.getSubValue(); //this is subValue

console.log(sub.id); //undefined
console.log(sub.name); //javascript

sub.name.push('java'); //["javascript"]
console.log(sub2.name) //["javascript", "java"]
