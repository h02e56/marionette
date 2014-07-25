module.exports = function(App){

    var employees = (function(App, Employees){

        console.log(Employees);
        Employees.Model = Backbone.Model.extend({
            idAttribute: '_id'
        });

        Employees.Collection = Backbone.Collection.extend({
            model:  Employees.Model,
            url: '/employees'
        });

        Employees.ItemView = Marionette.ItemView.extend({
            template: '#employees',
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
            },
            events: {
                'click': 'showDetails'
            },
         
            showDetails: function() {
                // window.app.core.vent.trigger('app:log', 'Contacts View: showDetails hit.');
                // window.app.controller.details(this.model.id);
                console.log('view details');
            }
        });

        Employees.CollectionView = Marionette.CollectionView.extend({
            childView: Employees.ItemView,
            initialize: function() {
                this.listenTo(this.collection, 'change', this.render);
            },
            itemView: itemView
        });

    })(App, App.loadModule['employees']);
}
