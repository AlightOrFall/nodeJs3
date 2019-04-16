var str = "hello";
var buf = Buffer.from(str);
console.log(buf);

var buf2 = Buffer.alloc(3);
buf2[0] = 5;
buf2[1] = 6;
buf2[2] = 0xaa;
console.log(buf2);