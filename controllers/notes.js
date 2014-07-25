//require note moongoose model
var employees = require('../models/employees');

//index page route
//sends all employees
exports.index = function(req, res) {
	//var notes = [{name:"josep"}]; 
    Employee.find(function(err, Employees){
   		res.render('index', {Employees : Employees});
    });
};

//add Employee to db
exports.add = function(req, res){
	//creaate instance
	var newEmployee = new Employee({
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
	Employee.findOne(function(err, el){
		res.send(el);
	})
}

//delete item
exports.delete = function(req, res){
	var id = req.body.id;
	Employee.remove({id: id});
		res.send('done')
}

//update item
exports.update = function(req, res){
	Employee.update(
		{ id: req.body.id },
		{
			name: req.body.name,
			phone: req.body.phone,
			email: req.body.email
		}
	});

}


