/**
 * [Note description]
 * @type {[type]}
 */
var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    name: 	{ type: String, required: true},
    phone: 	{ type: String, required: true},
    email: 	{ type: String, required: true}   
});

employeeSchema.methods.update = function(data){
	Employees.update(
		{ id: data.id },
		{
			name: data.name,
			phone: data.phone,
			email: data.email
		});
}

employeeSchema.methods.delete = function (id) {
	this.remove({id: id});
}

employeeSchema.methods.add = function (data) {
	this.add({
		name: data.id,
		phone: data.phone,
		email: data.email
	});
}



module.exports = mongoose.model('Employee', employeeSchema);
