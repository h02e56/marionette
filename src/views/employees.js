var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');

 
var itemView = Marionette.ItemView.extend({
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
 
module.exports = Marionette.CollectionView.extend({
    childView: itemView,
    initialize: function() {
        this.listenTo(this.collection, 'change', this.render);
    },
    itemView: itemView
});