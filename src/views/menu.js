var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var  Marionette = require('backbone.marionette');
 
module.exports  = Marionette.ItemView.extend({
    el:"#menu",
    events: {
        'click button': 'show'
    },
    initialize: function() {
    },
    show: function(e) {
    	window.app.core.controller.employees();
    }
});