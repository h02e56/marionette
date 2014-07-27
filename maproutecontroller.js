

exports.mapRoute = function(app, prefix) {

   	prefix = '/' + prefix;

   	var prefixObj = require('./controllers/' + prefix);

   	// index
  	app.get(prefix, prefixObj.index);

   	// add item
   	app.post(prefix + '/add', prefixObj.add);

   	//delete item
	app.post(prefix + '/remove', prefixObj.delete);   

	//update
	app.post(prefix + '/update', prefixObj.update);   

};
