var controller = require('./lib/app');
var http = require('http');
var onStart = function(){
	console.log('Game started in port 8080')
};
var server = http.createServer(controller);
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT ||8888;
server.listen(port, ipaddress);
