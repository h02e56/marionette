/*
 * GET home page.
 */

exports.index = function(req, res){
	
	// openDb()
	// 	.then(createCollection)
	// 	.catch(error)
	// 	.done(function(el){
	// 		console.log("opnened");
	// 	});


  // Q.(openDb)
  // 	.then(createCollection)
  // 	.done(function(res){
  // 		console.log("done");
  // 	});
  
  res.redirect('notes');
};


// function error(e){
// 	throw new Error(e);
// }

/**
 * [mongodb description]
 * @type {[type]}
 */
// function openDb(){
// 	var deferred = Q.defer();
//   var server = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
//   var db = new mongodb.Db('mydb', server);

//   db.open(function(err, db){
// 		if(!err){	  
// 		  deferred.resolve(db);
// 		}else{
// 			deferred.reject();
// 		}
// 	});  	
// 	return deferred.promise;	
// }

// function createCollection(db){
// 	var deferred = Q.defer();
  
//   db.createCollection('mysc', {safe : true}, function(err, collection){
//   	if(!err){
//   		deferred.resolve(collection);
//   	}
//   });

//   return deferred.promise;	
// }
