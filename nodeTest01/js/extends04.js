//原型式继承
//原型式继承其实就是类式继承的封装,实现的功能是返回一个实例，改实例的原型继承了传入的o对象
function inheritObject(o) {
	//声明一个过渡函数对象
	function F() {}
	//过渡对象的原型继承父对象
	F.prototype = o;
	//返回一个过渡对象的实例，该实例的原型继承了父对象
	return new F();
}
//寄生式继承
//寄生式继承就是对原型继承的第二次封装，使得子类的原型等于父类的原型。并且在第二次封装的过程中对继承的对象进行了扩展
function inheritPrototype(subClass, superClass) {
	//复制一份父类的原型保存在变量中，使得p的原型等于父类的原型
	var p = inheritObject(superClass.prototype);
	//修正因为重写子类原型导致子类constructor属性被修改
	p.constructor = subClass;
	//设置子类的原型
	subClass.prototype = p;
}
//定义父类
var SuperClass = function(name) {
	this.name = name;
	this.books = ['javascript', 'html', 'css']
};
//定义父类原型方法
SuperClass.prototype.getBooks = function() {
	console.log(this.books);
};

//定义子类
var SubClass = function(name) {
	SuperClass.call(this, name);
}

inheritPrototype(SubClass, SuperClass);

var subclass1 = new SubClass('php');