'use strict';

// Module dependencies
var express = require('express');
var colors = require('colors');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

// Create server
var app = express();

//controllers and router
var routes = require('./routes');
var user = require('./routes/user');
var map = require('./maproutecontroller');

// Configure server
var db = 'redbooth';
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.bodyParser());

// Mount statics
app.use(express.static(path.join(__dirname, '.tmp')));
app.use(express.static(path.join(__dirname, 'dist')));

//enviroments and db
var env = process.env.NODE_ENV || 'development' ;

if ('development' == env) { 
	//persisitent database conenection.localserver
	mongoose.connect('mongodb://127.0.0.1/' + db);
	app.use(express.errorHandler());	
}

if ('production' == env) { 
	var url = process.env.MONGOLAB_URI;
	mongoose.connect(url);	
}

//mongoose connection handlers
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', function(){
	console.log("connected to db");
});


//map routes
var prefixes = ['employees'];//set modules to route

// map route to controller
prefixes.forEach(function(prefix) {
  map.mapRoute(app, prefix);
});


//Route index.html
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, 'index.html'));
});

// app.get('/employees', function(req, res){
// 	res.sendfile(path.join(__dirname, 'dist/index.html'));
// });

// Start server
http.createServer(app).listen(app.get('port'), function() {
  console.log(
    'Express server listening on port '.green + app.get('port')
  );
});
