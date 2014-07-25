var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

var EmployeeModel = require('./models/employee'),
    EmployeesCollection = require('./collections/employeesCollection');

module.exports = Marionette.Controller.extend({

	 home: function () {
	    
	     window.app.router.navigate('/employees');
	 },

	employees: function(){
		//window.app.router.navigate('/employees');
		var view = window.app.core.views.employeesView;
	    this.renderView(view);
    	window.app.core.router.navigate('/employees');	

	}
})