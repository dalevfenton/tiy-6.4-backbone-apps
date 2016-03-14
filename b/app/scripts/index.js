var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var models = require('./models/models');
var FormView = require('./views/form');
var UserList = require('./views/userlist');


var people = new models.PersonCollection();
var form = new FormView({ collection: people });
var list = new UserList({ collection: people });

$(function(){
  people.fetch().done(function(){
    $('#contact-form-holder').html( form.render().el );
    $('#contacts-holder').html( list.render().el );
  });
});
