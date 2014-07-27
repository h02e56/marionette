var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

var EmployeeModel = require('./models/employee'),
    EmployeesCollection = require('./collections/employeesCollection');

module.exports = Marionette.Controller.extend({

	 home: function () {	
	     window.app.router.navigate('#');
	 },

	employees: function(){
    	var EmployeesCollection = window.app.modules.employees.Collection;
	    var EmployeesCollectionView = window.app.modules.employees.CollectionView;
		
		var collection = {employees:[{name:'josep', phone:'joan'},{name:'josepas', phone:'j@ss.com'}]};

	    var employeesCollection = new EmployeesCollection(collection);

	    var employeesView = new EmployeesCollectionView({
	    	collection : employeesCollection
	    });

	    $('#employees').html(employeesView.el);
    	window.app.core.router.navigate('/employees');

	}
})