var express = require('d:/node/node_modules/express');
var app = express.createServer();
app.use(express.bodyParser());
app.all('/', function(req, res) {
 res.send(req.body.title + req.body.text);
});
app.listen(8888);  