var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');
 
module.exports  = Marionette.ItemView.extend({
    el: '#menu',
    events: {
        'click': 'showEmployees'
    },
    initialize: function() {
    },
    showEmployees: function() {
        window.app.core.vent.trigger('app:showEmployees', 'loading data');
    }
});