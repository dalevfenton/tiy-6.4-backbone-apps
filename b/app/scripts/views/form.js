var Backbone = require('backbone');
var Handlebars = require('handlebars');
var $ = require('jquery');

var template = require('../../templates/userform.hbs');

var FormView = Backbone.View.extend({
  template: template,

  initialize: function(){
    console.log('form view initialized');
    this.render();
  },
  events: {
    "submit": "addUser"
  },
  addUser: function(event){
    event.preventDefault();
    console.log( this.$el.find('#user-form').serializeArray() );
    var user = this.$el.find('#user-form')
                .serializeArray()
                .reduce(function(memo, obj){
                  memo[obj.name] = obj.value;
                  return memo;
                }, {});
    this.collection.create(user);
    this.render();
  },
  render: function(){
    this.$el.html( this.template({ url: this.collection.url }) );
    return this;
  }
});

module.exports = FormView;
