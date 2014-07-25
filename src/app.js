//load modules
var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

var Menu = require('./views/menu'),
    Controller = require('./controller'),
    Router = require('./router'),
    EmployeeModel = require('./models/employee'),
    EmployeesCollection = require('./collections/employeesCollection'),
    EmployeeView = require('./views/employees');

var App = {};

module.exports = App = function App(){};


App.prototype.start = function(first_argument) {
    this.core = new Marionette.Application();
    
    this.events();
    //start marioneete instance
    this.core.start();
};

App.prototype.events= function(){
    //before start marionette
    var app = this;

    this.core.on("before:start", function () { 
        this.menu = new Menu();
        this.views = {};
        this.data = {};
         //fetch initial data
        
    });
    //on start marionette instance
    this.core.vent.bind('app:start', initializeRouterAndController );

    //load employees
    this.core.vent.on("app:showEmployees", function (message) {
        console.log(message);
        fetchInitialData.call(this);
    }) 
}

function initializeRouterAndController(options){    
    //create controller and router
    if (Backbone.history) {              
        this.controller = new Controller();
        this.router = new Router({ controller : this.controller })
        Backbone.history.start();
        console.log('created router and controller');
    }   
}

function fetchInitialData(){
    var employees = new EmployeesCollection();
    employees.fetch({
        success: function() {
            app.core.data.employees = employees;
        }
    });
}