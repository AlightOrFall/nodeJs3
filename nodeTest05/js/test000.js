console.log((0.2 + 0.3) === 0.5);

var Exposer = (function() {
	var privateVariable = 10;

	var privateMethod = function() {
		console.log('Inside a private method!');
		privateVariable++;
	}

	var methodToExpose = function() {
		console.log('This is a method I want to expose!');
	}

	var otherMethodIWantToExpose = function() {
		privateMethod();
	}

	return {
		first: methodToExpose,
		second: otherMethodIWantToExpose
	};
})();

Exposer.first(); // 输出: This is a method I want to expose!
Exposer.second(); // 输出: Inside a private method!
Exposer.methodToExpose; // undefined
