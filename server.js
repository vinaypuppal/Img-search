var express = require('express');
var http = require('http');
var morgan = require('morgan');
var router = require('./router');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'/public')));
app.use(morgan('combined'));
router(app);

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port,function (error) {
	if (error) {throw error}
	else	console.log('server listening on port '+port);
});


