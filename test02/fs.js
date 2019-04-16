var fs = require('fs');
var fsData = fs.openSync('./hello.txt','w');
fs.writeSync(fsData,"JAVA Thinking",10,'utf-8');
fs.closeSync(fsData);