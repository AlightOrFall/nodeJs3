//构造函数继承
//声明父类
function SuperClass(id) {
	var name = 'javascript'
	this.books = ['javascript', 'html', 'css'];
	this.id = id
}

//声明父类原型方法
SuperClass.prototype.showBooks = function() {
	console.log(this.books);
}

//声明子类
function SubClass(id) {
	SuperClass.call(this, id);
}

//创建第一个子类实例
var subclass1 = new SubClass(10);
var subclass2 = new SubClass(11);
subclass2.showBooks();
console.log(subclass1.books);
console.log(subclass2.id);
console.log(subclass1.name); //undefined