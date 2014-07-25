//load modules
var $ = require('jquery');
var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;

var EmployeeModel = require('../models/employee');
 
module.exports = Backbone.Collection.extend({
    model:  EmployeeModel,
    url: '/employees'
});