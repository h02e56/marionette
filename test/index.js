'use strict';

var app = require('./app');

var module = require('./module');


function suma(a, b){
	console.log(this);
	return a + b;
}
 var one = suma.bind(this, 5);

 var total = one(9);
 console.log(total);
 console.log(global);



