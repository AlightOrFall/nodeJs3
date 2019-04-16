
/* var timer1 = setTimeout(timeOut(),1000);
clearTimeout(timer1); */

/* setInterval(function(){
	console.log('hello');
},2000); */
var timer = setInterval(interval,1000);

/* function timeOut(){
	console.log("i am timeOut");
} */

function interval(){
	console.log("i am Interval");
	clearInterval(timer);
}

setInterval(interval,1000);