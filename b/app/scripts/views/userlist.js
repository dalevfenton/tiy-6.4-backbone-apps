var Backbone = require('backbone');
var Handlebars = require('handlebars');

var template = require('../../templates/userlist.hbs');

var UserList = Backbone.View.extend({
  tag: 'ul',
  id: 'user-list',
  template: template,

  initialize: function(){
    this.render();
    this.listenTo( this.collection, 'change', this.render );
  },

  render: function(){
    this.$el.html( this.template( this.collection.toJSON() ));
    return this;
  }

});

module.exports = UserList;
