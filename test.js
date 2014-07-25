// Vendors
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// app bootstrap
var app = new Marionette.Application();
// ...
app.start();
Backbone.history.start();

module.exports = app;