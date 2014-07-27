//require note moongoose model
var Employees = require('../models/employees');

//var employee = new Employees();
//index page route
//sends all employees
exports.index = function(req, res) {
   	//res.render('index', {Employees : Employees.getAll()});
   	Employees.find(function (err, employees) {
  		if (err) return console.error(err);
		res.send({ employees :  employees });
	});
   	
};

//add Employee to db
exports.add = function(req, res){
	//create instance
	var newEmployee = new Employees({
						name: req.body.name,
						phone: req.body.phone,
						email: req.body.email
					});
	
	//save data on db
	newEmployee.save(function(err, data){
		if(err){
			res.end(err);
		} 
		res.json(data);
	})
}

//show all items
exports.showAll = function(req, res){
	Employees.findOne(function(err, el){
		res.send(el);
	})
}

//delete item
exports.delete = function(req, res){

}

//update item
exports.update = function(req, res){
	

}


