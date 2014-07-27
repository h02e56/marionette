//load modules
var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

var Controller = require('./controller'),
    Router = require('./router');

//modules
var Employees = require('./modules/employees');
var Menu = require('./views/menu');

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
        // this.addRegions({
        //       reference to container element in the HTML file 
        //     appRegion: '#AppBase'
        // });   
        app.modules = {};
        app.data = {};

        //load modules
        Employees(app);
    });

    this.core.vent.on("app:showemployees", function () { 
        console.log('show emplo');
    });

    this.core.addInitializer(routerAndController);

    this.core.on('start', createLayout);
}

App.prototype.getModule = function(name) {
    var modules = this.modules;
    return (modules[name]) ?  modules[name] : "module don't exist";
}

function routerAndController(){
    if (Backbone.history) {              
        this.controller = new Controller();
        this.router = new Router({ controller : this.controller });
        Backbone.history.start();
        console.log('created router and controller');
    }
}

function createLayout(){
    var menu = new Menu();

    // var AppLayout = Marionette.LayoutView.extend({
    //     tagName: 'div',
    //     id:'employeesContainer',
    //     template: '#layout-template',
    //     regions: {
    //         'employees' : '#employees'
    //     },
    //     initialize: function() {
    //         console.log('main layout: initialize');
    //     },
    //     onRender: function(){
            
    //     }
    // });
    // appLayout = new AppLayout();

    // window.app.core.appRegion.show(appLayout);
    //window.app.core.appRegion.show(menu);
}