let arr = [];

for(let i = 0;i < 5;i++){
	let n = Math.floor(Math.random()*35+1);
	let r = arr.indexOf(n);
	r < 0?arr.push(n):i--;
}

for(let j=0;j<2;j++){
	let n = Math.floor(Math.random()*12+1);
	let r = arr.indexOf(n);
	r<0?arr.push(n):j--;
}
console.log(arr);

//10, 4, 11, 7, 18, 8, 12  22, 4, 17, 23, 8, 7, 2
//25, 14, 7, 35, 1, 2, 6  20, 34, 24, 10, 2, 7, 8
//1, 9, 24, 23, 13, 7, 5