//load modules
var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

module.exports = function(App){
    
    var employees;

    App.modules.employees = employees = {};
        
    employees.Model = Backbone.Model.extend({
        defaults:{
            name:'josep',
            email:'sds'
        },
        idAttribute: '_id'
    });

    employees.Collection = Backbone.Collection.extend({
        model:  employees.Model,
        url: '/employees'
    });

    employees.ItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: '#employee-template',
        events: {
            'click': 'showDetails'
        },
        initialize: function() {
        },
        showDetails: function() {
            // window.app.core.vent.trigger('app:log', 'Contacts View: showDetails hit.');
            // window.app.controller.details(this.model.id);
            console.log('view details');
        }
    });

    employees.CollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        childView : employees.ItemView,
        initialize: function (argument) {
            //this.render();
            //this.listenTo(this.collection, 'sync', this.paint);
        },
        onRender: function (argument) {
            // body...
            console.log(this.el);
           
        }
    });
    
    // employees.CompositeView =  Marionette.CompositeView.extend({
    //     template: '#employeesTemplate',
    //     itemView: employees.ItemView,
    //     itemViewContainer: "#employees",
    //     childView: employees.ItemView,
    //     initialize: function() {
    //         //this.render();
    //         //this.listenTo(this.collection, 'change', this.render);
    //     }
    // })
    return employees;
}
