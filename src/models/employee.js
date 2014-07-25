var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
 Backbone.$ = $;

module.exports = Backbone.Model.extend({
    idAttribute: '_id'
});